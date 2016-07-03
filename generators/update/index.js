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
        const files = new speedseed.Files()

        files.del('.core', () => {
            const data = this.config.getAll()

            require('../files/_babelrc.js')(data)
            require('../files/_bower.js')(data)
            require('../files/_bowerrc.js')(data)
            require('../files/_core-config.js')(data)
            require('../files/_eslintrc.js')(data)
            require('../files/_package.js')(data)

            this.create('seed/core', './.core', false)
            this.create('seed/editorconfig', './.editorconfig')
            this.create('seed/gitignore', './.gitignore')
            this.create('seed/gulpfile.js', './gulpfile.js')
            this.create(`seed/template/test/${this.config.get('test')}/karma.conf.js`, './.core/karma.conf.js')

            this.config.set('isInstall', true)
        })
    }
}