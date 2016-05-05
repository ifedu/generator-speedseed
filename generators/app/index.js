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
                name: 'multi-tic-tac-toe',
                value: 'multi-tic-tac-toe'
            }]
        }

        this.prompt(prompts, (answers) => {
            this.config.set('-ss_version', 'generator-speedseed version 0.5.2')

            console.log(this.config.get('-ss_version'))

            for (let answer in answers) {
                this.config.set(answer, answers[answer])
            }

            done()
        })
    },

    writing() {
        const create = config.create.bind(this)
        // // ROOTS
        create('-ss/config.js', './-ss/config.js')
        create('-ss/editorconfig', './.editorconfig')
        create('-ss/eslintrc', './.eslintrc')
        create('-ss/gitignore', './.gitignore')
        create('-ss/gulpfile.js', './gulpfile.js')
        create('-ss/karma.conf.js', './-ss/karma.conf.js')
        create('-ss/package.json', './package.json')

        //-SS
        create('-ss/mixins')
        create('-ss/tasks')
    },

    end() {
        if (this.config.get('template') !== 'no') {
            this.composeWith('speedseed:framework')
        }
    }
})