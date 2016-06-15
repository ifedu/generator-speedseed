'use strict'

const config = require('../_config.js')

module.exports = require('yeoman-generator').Base.extend({
    paths() {
        config.paths.call(this)
    },

    prompting() {
        const done = this.async()

        config.prompting.call(this, {
            message: 'Component Name?',
            name: 'component',
            type: 'input'
        }, done)
    },

    writing() {
        const create = config.create.bind(this)

        const css = this.config.get('css')
        const compiler = this.config.get('compiler')
        const component = this.config.get('component')
        const framework = this.config.get('framework')

        const route = `seed/template/multi-tic-tac-toe/${framework}`
        const routeDest = `./app/components/${component}`

        create(`${route}/compiler/all/component`, routeDest)
        create(`${route}/compiler/all/component/.*`, routeDest)
        create(`${route}/compiler/${compiler}/component`, routeDest)
        create(`${route}/compiler/${compiler}/component/.*`, routeDest)
        create(`${route}/css/${css}/component`, routeDest)
        create(`${route}/css/${css}/component/.*`, routeDest)
    }
})