'use strict'

const config = require('../_config.js')

module.exports = require('yeoman-generator').Base.extend({
    paths() {
        config.paths.call(this)
    },

    prompting() {
        const done = this.async()

        const prompts = {
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
        }

        this.prompt(prompts, (answers) => {
            this.props = this.props || {}

            for (let answer in answers) {
                this.config.set(answer, answers[answer])

                this.props[answer] = answers[answer]
            }

            done()
        })
    },

    writing() {
        const create = config.create.bind(this)
        // CSS
        create(`seed/config.js`, './.core/config.js')
    }
})