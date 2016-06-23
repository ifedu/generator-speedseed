'use strict'

const $ = require('../_config.js')

module.exports = require('yeoman-generator').Base.extend({
    paths() {
        $.paths.call(this)
    },

    prompting() {
        $.prompting.call(this, this.async(), [{
            default: this.config.get('project') || '',
            message: 'Project Name?',
            name: 'project',
            type: 'input'
        }, {
            default: this.config.get('template') || 0,
            message: 'Template?',
            name: 'template',
            type: 'list',

            choices: [
                { name: 'Multi-Tic-Tac-Toe', value: 'multi-tic-tac-toe' },
                { name: 'No', value: 'no' }
            ]
        }, {
            default: this.config.get('framework') || 0,
            message: 'Library / Framework?',
            name: 'framework',
            type: 'list',

            choices: [
                { name: 'AngularJS', value: 'angularjs' },
                { name: 'Angular2', value: 'angular2' },
                { name: 'jQuery', value: 'jquery' },
                { name: 'Polymer', value: 'polymer' },
                { name: 'React', value: 'react' },
                { name: 'VanillaJS', value: 'vanillajs' }
            ]
        }, {
            default: this.config.get('compiler') || 0,
            message: 'JavaScript Compiler?',
            name: 'compiler',
            type: 'list',

            choices: [
                { name: 'BabelJS', value: 'babeljs' },
                { name: 'Coffeescript', value: 'coffeescript' },
                { name: 'TypeScript', value: 'typescript' }
            ]
        }, {
            default: this.config.get('css') || 0,
            message: 'CSS?',
            name: 'css',
            type: 'list',

            choices: [
                { name: 'SaSS', value: 'sass' },
                { name: 'ScSS', value: 'scss' },
                { name: 'Less', value: 'less' },
                { name: 'Stylus', value: 'styl' }
            ]
        }, {
            default: this.config.get('test') || 0,
            message: 'Test?',
            name: 'test',
            type: 'list',

            choices: [
                { name: 'Mocha', value: 'mocha' },
                { name: 'Jasmine', value: 'jasmine' },
                { name: 'No', value: 'no' }
            ]
        }])
    },

    write() {
        let project = this.config.get('project').toLowerCase().replace(/[-_ ]/g, '')

        this.config.set('project', project)

        this.composeWith('speedseed:update')
    },

    end() {
        const template = this.config.get('template')

        if (template !== 'no') {
            this.composeWith(`speedseed-${template}`, { options: this.config.getAll() })
        }
    }
})