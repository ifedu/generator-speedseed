const searchGenerators = () => {
    const request = require('sync-request')

    const choices = [
        { name: 'generator-speedseed-multi-tic-tac-toe', value: 'multi-tic-tac-toe' },
        { name: 'generator-speedseed-angular2-cleanly', value: 'angular2-cleanly' },
        { name: 'generator-speedseed-polymer-cleanly', value: 'polymer-cleanly' }
    ]

    try {
        const res = request('GET', 'https://storage.googleapis.com/generators.yeoman.io/cache.json')

        const CHARACTERS_TEMPLATING = 'speedseed-'
        const CHARACTERS_TEMPLATING_LENGTH = 'speedseed-'.length

        const searchGeneratorsIncludes = (data) => {
            let isFinded = false

            for (let choice of choices) {
                if (choice.name === `generator-${data.name}`) {
                    isFinded = true
                }
            }

            return isFinded
        }

        const checkGeneratorSpeedSeed = (data) => {
            const FIRST_CHARACTERS_DATA = data.name.substring(0, CHARACTERS_TEMPLATING_LENGTH)

            if ((FIRST_CHARACTERS_DATA === CHARACTERS_TEMPLATING) &&
                (searchGeneratorsIncludes(data) === false)) {
                choices.push({
                    name: `generator-${data.name}`,
                    value: data.name.substring(10)
                })
            }
        }

        for (let data of JSON.parse(res.getBody('utf8'))) {
            checkGeneratorSpeedSeed(data)
        }
    } catch (e) {}

    return choices
}

const speedseed = require('speedseed')

module.exports = class Yo extends speedseed.Config {
    constructor(...args) {
        super(...args)
    }

    paths() {
        const path = require('path')

        this.sourceRoot(path.resolve(__dirname, '../../'))
    }

    prompting() {
        const prompt = [{
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

        this._setPrompting(prompt, this.async())
    }

    write() {
        const project = this.config.get('project').toLowerCase().replace(/[-_ ]/g, '')

        this.config.set('project', project)

        const template = this.config.get('template')

        const options = this.config.getAll()
        options.speedseed = this

        this.composeWith(`speedseed-${template}`, { options })
    }
}