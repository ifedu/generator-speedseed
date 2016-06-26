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
                { name: 'generator-speedseed-multi-tic-tac-toe', value: 'multi-tic-tac-toe' }
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