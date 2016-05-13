'use strict'

const config = require('../_config.js')

module.exports = require('yeoman-generator').Base.extend({
    paths() {
        config.paths.call(this)
    },

    prompting() {
        const done = this.async()

        const prompts = {
            default: 0,
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
        }

        this.prompt(prompts, (answers) => {
            this.config.set('core-version', 'generator-speedseed version 0.7.0')

            console.log(this.config.get('-core-version'))

            for (let answer in answers) {
                this.config.set(answer, answers[answer])
            }

            done()
        })
    },

    writing() {
        const create = config.create.bind(this)
        // ROOTS
        create('core/config.js', './.core/config.js')
        create('core/core-config.js', './core-config.js')
        create('core/editorconfig', './.editorconfig')
        create('core/eslintrc', './.eslintrc')
        create('core/gitignore', './.gitignore')
        create('core/gulpfile.js', './gulpfile.js')
        create('core/karma.conf.js', './.core/karma.conf.js')
        create('core/package.json', './package.json')

        // CORE
        create('core/mixins')
        create('core/tasks')
    },

    end() {
        if (this.config.get('template') !== 'no') {
            this.composeWith('speedseed:framework')
        }
    }
})