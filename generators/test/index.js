'use strict'

const config = require('../_config.js')

module.exports = require('yeoman-generator').Base.extend({
    paths() {
        config.paths.call(this)
    },

    prompting() {
        const done = this.async()

        config.prompting.call(this, {
            default: this.config.get('testJS') || 0,
            message: 'Test?',
            name: 'testJS',
            type: 'list',

            choices: [ {
                name: 'Mocha',
                value: 'mocha'
            }, {
                name: 'Jasmine',
                value: 'jasmine'
            }, {
                name: 'No',
                value: 'no'
            }]
        }, done)
    },

    writing() {
        const create = config.create.bind(this)
        // TEST
        if (this.config.get('testJS') !== 'no') {
            create(`seed/test/${this.config.get('testJS')}/karma.conf.js`, './.core/karma.conf.js', false)
        }
    }
})