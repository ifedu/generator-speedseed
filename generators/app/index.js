'use strict'

const $ = require('../_config.js')
const generators = require('yeoman-generator')

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments)

        const packageJson = require('../../package.json')

        this.config.set('coreVersion', `${packageJson.name} version ${packageJson.version}`)

        console.log(this.config.get('coreVersion'))
    },

    prompting() {
        $.prompting.call(this, this.async(), {
            default: this.config.get('install') || 0,
            message: 'Install or Update?',
            name: 'init',
            type: 'list',

            choices: [
                { name: 'Install', value: 'install' },
                { name: 'Update', value: 'update' }
            ]
        })
    },

    write() {
        if (this.config.get('init') === 'install') {
            this.composeWith('speedseed:install')
        }
        else if (this.config.get('init') === 'update') {
            this.composeWith('speedseed:update')
        }
    }
})