'use strict'

const $ = require('../_config.js')

module.exports = require('yeoman-generator').Base.extend({
    paths() {
        $.paths.call(this)
    },

    prompting() {
        $.prompting.call(this, this.async(), {
            message: 'Component Name?',
            name: 'component',
            type: 'input'
        })
    },

    writing() {
        const create = $.create.bind(this)

        const css = this.config.get('css')
        const compiler = this.config.get('compiler')
        const component = this.config.get('component').toLowerCase().replace(/[-_ ]/g, '')
        const framework = this.config.get('framework')
        const route = `../seed/template/all/${framework}`
        const routeDest = `./app/components/${component}`

        this.config.set('component', component)

        create(`${route}/compiler/all/component`, routeDest)
        create(`${route}/compiler/all/component/.*`, routeDest)
        create(`${route}/compiler/${compiler}/component`, routeDest)
        create(`${route}/compiler/${compiler}/component/.*`, routeDest)
        create(`${route}/css/${css}/component`, routeDest)
        create(`${route}/css/${css}/component/.*`, routeDest)
    }
})