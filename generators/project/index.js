'use strict'

const config = require('../_config.js')

module.exports = require('yeoman-generator').Base.extend({
    paths() {
        config.paths.call(this)
    },

    prompting() {
        const done = this.async()

        config.prompting.call(this, {
            default: this.config.get('project') || '',
            message: 'Project Name?',
            name: 'project',
            type: 'input'
        }, done)
    },

    writing() {
        const create = config.create.bind(this)
        // CORE
        create('seed/props-tpl.js', './.core/props-tpl.js')
        create('seed/core', './.core', false)

        // ROOT
        create('seed/babelrc', './.babelrc')
        create('seed/bowerrc', './.bowerrc')
        create('seed/core-config.js', './.core-config.js')
        create('seed/editorconfig', './.editorconfig')
        create('seed/eslintrc', './.eslintrc')
        create('seed/gitignore', './.gitignore')

        create('seed/bower.json', './bower.json')
        create('seed/gulpfile.js', './gulpfile.js')

        require('./_package.js').call(this)
    }
})