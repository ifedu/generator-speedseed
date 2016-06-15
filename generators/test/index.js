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
    }
})