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
            message: 'Library / Framework?',
            name: 'libraryJS',
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
            }]
        }

        this.prompt(prompts, (answers) => {
            for (let answer in answers) {
                this.config.set(answer, answers[answer])
            }

            done()
        })
    },

    writing() {
        const create = config.create.bind(this)
        // //DEV
        create(`-ss/template/${this.config.get('template')}/lib/${this.config.get('libraryJS')}`, './dev', false)
    }
})