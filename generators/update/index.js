const generators = require('yeoman-generator')

const speedseed = require('speedseed')

module.exports = class Yo extends speedseed.Yo {
    constructor(...args) {
        super(...args)
    }

    paths() {
        this.pathsSet()
    }

    write() {
        const options = this.config.getAll()

        require('../files/_babelrc.js')(options)
        require('../files/_bower.js')(options)
        require('../files/_bowerrc.js')(options)
        require('../files/_core-config.js')(options)
        require('../files/_eslintrc.js')(options)
        require('../files/_package.js')(options)

        this.create('seed/editorconfig', './.editorconfig')
        this.create('seed/gitignore', './.gitignore')
        this.create('seed/gulpfile.js', './gulpfile.js')

        const files = new speedseed.Files()

        files.del('.core', () => {
            this.create('seed/core', './.core', false)
            this.create(`seed/template/test/${options.test}/karma.conf.js`, './.core/karma.conf.js')

            this.config.set('isInstall', true)
        })
    }

    end() {
        const options = this.config.getAll()

        this.composeWith(`speedseed-${options.template}:update`, { options })
    }
}