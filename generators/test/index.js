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
            message: 'Test?',
            name: 'testJS',
            type: 'list',

            choices: [{
                name: 'No',
                value: 'no'
            }, {
                name: 'Jasmine',
                value: 'jasmine'
            }, {
                name: 'Mocha',
                value: 'mocha'
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
        // TEST
        create(`seed/test/${this.config.get('testJS')}/karma.conf.js`, './.core/karma.conf.js', false)
    }
})