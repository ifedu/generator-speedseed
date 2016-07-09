const generators = require('yeoman-generator')

const speedseed = require('speedseed')

const searchGenerators = () => {
    const request = require('sync-request')

    const res = request('GET', 'https://storage.googleapis.com/generators.yeoman.io/cache.json')

    const choices = [
        { name: 'generator-speedseed-multi-tic-tac-toe', value: 'multi-tic-tac-toe' },
        { name: 'generator-speedseed-polymer-whitespace', value: 'polymer-whitespace' }
    ]

    for (let data of JSON.parse(res.getBody('utf8'))) {
        if (data.name.substring(0, 10) === 'speedseed-') {
            let isFinded = false

            for (let choice of choices) {
                if (choice.name === `generator-${data.name}`) {
                    isFinded = true
                }
            }

            if (isFinded === true) continue

            choices.push({
                name: `generator-${data.name}`,
                value: data.name.substring(10)
            })
        }
    }

    return choices
}

module.exports = class Yo extends speedseed.Yo {
    constructor(...args) {
        super(...args)
    }

    paths() {
        this.pathsSet()
    }

    prompting() {
        const prompting = [{
            default: this.config.get('project') || '',
            message: 'Project Name?',
            name: 'project',
            type: 'input'
        }, {
            default: this.config.get('template') || 0,
            message: 'Template?',
            name: 'template',
            type: 'list',

            choices: searchGenerators()
        }]

        this.promptingYo(prompting, this.async())
    }

    write() {
        const project = this.config.get('project').toLowerCase().replace(/[-_ ]/g, '')

        this.config.set('project', project)
    }

    end() {
        const template = this.config.get('template')

        const options = this.config.getAll()
        options.speedseed = this

        this.composeWith(`speedseed-${template}`, { options })
    }
}