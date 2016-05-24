'use strict'

const config = require('../_config.js')
const generators = require('yeoman-generator')

module.exports = generators.Base.extend({
    paths() {
        config.paths.call(this)
    },

    prompting() {
        const done = this.async()

        config.prompting.call(this, {
            default: this.config.get('template') || 0,
            message: 'Template?',
            name: 'template',
            type: 'list',

            choices: [{
                name: 'Multi-Tic-Tac-Toe',
                value: 'multi-tic-tac-toe'
            }, {
                name: 'TodoMVC',
                value: 'todomvc'
            }, {
                name: 'No',
                value: 'no'
            }]
        }, done)
    }
})