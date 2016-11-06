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
        const tpl = this.config.get('tpl') || {}

        const options = [{
            default: tpl.component || '',
            message: 'Component Name?',
            name: 'component',
            option: { tpl },
            type: 'input',

            choices: []
        }]

        this._setPromptings({ options }, this.async())
    }

    write() {
        const tpl = this.config.get('tpl')
        const component = this.config.get('tpl').component.toLowerCase().replace(/[-_ ]/g, '')

        this.config.set('tpl', tpl)

        const route = `seed/template/${tpl.framework}`
        const routeDest = `./app/components/${tpl.component}`

        this._create(`${route}/app/component/**/*`, routeDest)
    }
}