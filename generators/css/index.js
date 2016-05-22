'use strict'

const config = require('../_config.js')

module.exports = require('yeoman-generator').Base.extend({
    paths() {
        config.paths.call(this)
    },

    prompting() {
        const done = this.async()

        config.prompting.call(this, {
            default: this.config.get('preprocessorCSS') || 0,
            message: 'CSS?',
            name: 'preprocessorCSS',
            type: 'list',

            choices: [{
                name: 'SaSS',
                value: 'sass'
            }, {
                name: 'ScSS',
                value: 'scss'
            }, {
                name: 'Less',
                value: 'less'
            }, {
                name: 'Stylus',
                value: 'styl'
            }]
        }, done)
    },

    writing() {
        const create = config.create.bind(this)
        // CSS
        if (this.config.get('template') !== 'no') {
            create(`seed/template/${this.config.get('template')}/css/${this.config.get('preprocessorCSS')}/all`, './app', false)
            create(`seed/template/${this.config.get('template')}/css/${this.config.get('preprocessorCSS')}/${this.config.get('libraryJS')}`, './app', false)
        }
    }
})