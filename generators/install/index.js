const speedseed = require('speedseed')

const searchGenerators = require('./searchGenerators.js')

module.exports = class Yo extends speedseed.Config {
    constructor(...args) {
        super(...args)
    }

    paths() {
        const path = require('path')

        this.sourceRoot(path.resolve(__dirname, '../../'))
    }

    prompting() {
        const general = this.config.get('general') || {}

        const options = [{
            default: general.project || '',
            message: 'Project Name?',
            name: 'project',
            option: { general },
            type: 'input'
        }, {
            default: general.template || 0,
            message: 'Template?',
            name: 'template',
            option: { general },
            type: 'list',

            choices: searchGenerators()
        }]

        this._setPromptings({ options }, this.async())
    }

    write() {
        const general = this.config.get('general')
        general.project = general.project.toLowerCase().replace(/[-_ ]/g, '')

        this.config.set('general', general)

        const options = this.config.getAll()
        options.speedseed = this

        this.composeWith(`speedseed-${general.template}`, { options })
    }
}