import { Config } from 'speedseed'

module.exports = class Yo extends Config {
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
            type: 'input',

            choices: []
        }]

        this._setPromptings({ options }, this.async())
    }

    write() {
        this._create('seed/generator/**/*', './')
    }
}
