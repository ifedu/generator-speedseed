'use strict'

const config = require('../_config.js')
const generators = require('yeoman-generator')

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments)

        this.config.set('coreVersion', 'generator-speedseed version 0.8.0')
        global.ss.props.coreVersion = this.config.get('coreVersion')

        console.log(this.config.get('coreVersion'))
    },

    end() {
        this.composeWith('speedseed:template')
        this.composeWith('speedseed:framework')
        this.composeWith('speedseed:css')
        this.composeWith('speedseed:test')
    }
})