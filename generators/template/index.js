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
                name: 'No',
                value: 'no'
            }, {
                name: 'Multi-Tic-Tac-Toe',
                value: 'multi-tic-tac-toe'
            }, {
                name: 'TodoMVC',
                value: 'todomvc'
            }]
        }, done)
    },

    writing() {
        const create = config.create.bind(this)
        // CORE
        create('seed/props-tpl.js', './.core/props-tpl.js')
        create('seed/core', './.core', false)

        // ROOT
        create('seed/babelrc', './.babelrc')
        create('seed/core-config.js', './.core-config.js')
        create('seed/editorconfig', './.editorconfig')
        create('seed/eslintrc', './.eslintrc')
        create('seed/gitignore', './.gitignore')

        create('seed/gulpfile.js', './gulpfile.js')
        create('seed/package.json', './package.json')
    }
})