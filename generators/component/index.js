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
        const prompt = {
            message: 'Component Name?',
            name: 'component',
            type: 'input'
        }

        this.setPrompting(prompt, this.async())
    }

    writing() {
        const css = this.config.get('css')
        const compiler = this.config.get('compiler')
        const component = this.config.get('component').toLowerCase().replace(/[-_ ]/g, '')
        const framework = this.config.get('framework')

        const route = `./seed/template/all/${framework}`
        const routeDest = `./app/components/${component}`

        this.config.set('component', component)

        this.create(`${route}/compiler/all/component`, routeDest, true)
        this.create(`${route}/compiler/${compiler}/component`, routeDest, true)
        this.create(`${route}/css/${css}/component`, routeDest, true)
    }
}