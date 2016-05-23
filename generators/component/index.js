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

        create(`seed/component/${this.config.get('libraryJS')}/components/${this.config.get('preprocessorCSS')}`, `./app/components/${this.config.get('component')}`)
        create(`seed/component/${this.config.get('libraryJS')}/components/tpl`, `./app/components/${this.config.get('component')}`)
        create(`seed/component/${this.config.get('libraryJS')}/components/tpl/.*`, `./app/components/${this.config.get('component')}`)
    }
})