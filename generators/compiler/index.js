'use strict'

const config = require('../_config.js')

module.exports = require('yeoman-generator').Base.extend({
    paths() {
        config.paths.call(this)
    },

    prompting() {
        const done = this.async()

        config.prompting.call(this, {
            default: this.config.get('compiler') || 0,
            message: 'JavaScript Compiler?',
            name: 'compiler',
            type: 'list',

            choices: [{
                name: 'BabelJS',
                value: 'babeljs'
            }, {
                name: 'Coffeescript',
                value: 'coffeescript'
            }, {
                name: 'TypeScript',
                value: 'typescript'
            }]
        }, done)
    },

    writing() {
        const create = config.create.bind(this)

        if (this.config.get('compiler') === 'typescript') {
            create(`seed/template/${this.config.get('template')}/all/compiler/${this.config.get('compiler')}/typings`, './typings')
            create(`seed/template/${this.config.get('template')}/all/compiler/${this.config.get('compiler')}/typings.json`, './typings.json')
        }
    }
})