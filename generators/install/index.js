const generators = require('yeoman-generator')

const speedseed = require('speedseed')

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

            choices: [
                { name: 'generator-speedseed-multi-tic-tac-toe', value: 'multi-tic-tac-toe' }
            ]
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