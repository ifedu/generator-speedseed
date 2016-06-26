const generators = require('yeoman-generator')

const speedseed = require('../_index.js')

module.exports = class Yo extends speedseed.Yo {
    constructor(...args) {
        super(...args)
    }

    paths() {
        super.paths()
    }

    prompting() {
        super.prompting(this.async(), {
            message: 'Component Name?',
            name: 'component',
            type: 'input'
        })
    }

    writing() {
        const css = this.config.get('css')
        const compiler = this.config.get('compiler')
        const component = this.config.get('component').toLowerCase().replace(/[-_ ]/g, '')
        const framework = this.config.get('framework')

        const route = `../seed/template/all/${framework}`
        const routeDest = `./app/components/${component}`

        this.config.set('component', component)

        super.create(`${route}/compiler/all/component`, routeDest, true)
        super.create(`${route}/compiler/${compiler}/component`, routeDest, true)
        super.create(`${route}/css/${css}/component`, routeDest, true)
    }
}