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
        const prompt = {
            message: 'Component Name?',
            name: 'component',
            type: 'input'
        }

        this._setPrompting(prompt, this.async())
    }

    write() {
        // const compilerExt = this.config.get('compilerExt')
        // const component = this.config.get('component').toLowerCase().replace(/[-_ ]/g, '')
        // const css = this.config.get('css')
        // const framework = this.config.get('framework')
        // const test = this.config.get('test')
        //
        // const route = `seed/template/${framework}`
        // const routeDest = `./app/components/${component}`
        //
        // this.config.set('component', component)
        //
        // this._create(`${route}/app/component/**/*.jade`, routeDest)
        // this._create(`${route}/app/component/**/*.jsx`, routeDest)
        // this._create(`${route}/app/component/**/*${compilerExt}`, routeDest)
        // this._create(`${route}/app/component/**/*${css}`, routeDest)
        //
        // this._create(`${route}/test/${test}/app/component`, routeDest)
    }
}