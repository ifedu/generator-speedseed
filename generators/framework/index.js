'use strict'

const config = require('../_config.js')

module.exports = require('yeoman-generator').Base.extend({
    paths() {
        config.paths.call(this)
    },

    prompting() {
        const done = this.async()

        config.prompting.call(this, {
            default: this.config.get('framework') || 0,
            message: 'Library / Framework?',
            name: 'framework',
            type: 'list',

            choices: [{
                name: 'AngularJS',
                value: 'angularjs'
            }, {
                name: 'jQuery',
                value: 'jquery'
            }, {
                name: 'Polymer',
                value: 'polymer'
            }, {
                name: 'React',
                value: 'react'
            }, {
                name: 'VanillaJS',
                value: 'vanillajs'
            }]
        }, done)
    },

    writing() {
        const create = config.create.bind(this)
        // FRAMEWORK
        if (this.config.get('template') !== 'no') {
            create(`seed/template/${this.config.get('template')}/${this.config.get('framework')}/_vendor`, './app/_vendor', false)

            create(`seed/template/${this.config.get('template')}/all/app`, './app')
            create(`seed/template/${this.config.get('template')}/all/app/**/.*`, './app')

            create(`seed/template/${this.config.get('template')}/${this.config.get('framework')}/app`, './app')
            create(`seed/template/${this.config.get('template')}/${this.config.get('framework')}/app/**/.*`, './app')
        }
    }
})