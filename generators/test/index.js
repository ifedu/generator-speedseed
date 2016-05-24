'use strict'

const config = require('../_config.js')

module.exports = require('yeoman-generator').Base.extend({
    paths() {
        config.paths.call(this)
    },

    prompting() {
        const done = this.async()

        config.prompting.call(this, {
            default: this.config.get('test') || 0,
            message: 'Test?',
            name: 'test',
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
        if (this.config.get('test') !== 'no') {
            create(`seed/test/${this.config.get('test')}/karma.conf.js`, './.core/karma.conf.js', false)
        }
    }
})