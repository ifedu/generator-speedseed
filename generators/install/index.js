const generators = require('yeoman-generator')

const speedseed = require('speedseed')

module.exports = class Yo extends speedseed.Yo {
    constructor(...args) {
        super(...args)
    }

    paths() {
        super.paths()
    }

    prompting() {
        super.prompting(this.async(), [{
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
                { name: 'generator-speedseed-multi-tic-tac-toe', value: 'multi-tic-tac-toe' },
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
    }

    write() {
        const compiler = this.config.get('compiler')
        const project = this.config.get('project').toLowerCase().replace(/[-_ ]/g, '')

        const ext = {
            babeljs: '.js',
            coffeescript: '.coffee',
            typescript: '.ts'
        }

        this.config.set('project', project)
        this.config.set('compilerExt', ext[compiler])

        this.composeWith('speedseed:update')
    }

    end() {
        const template = this.config.get('template')

        if (template !== 'no') {
            this.composeWith(`speedseed-${template}`, { options: this.config.getAll() })
        }

        this.config.set('isInstall', true)
    }
}