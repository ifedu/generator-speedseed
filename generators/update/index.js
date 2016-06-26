const generators = require('yeoman-generator')

const speedseed = require('speedseed')

module.exports = class Yo extends speedseed.Yo {
    constructor(...args) {
        super(...args)
    }

    paths() {
        super.paths()
    }

    write() {
        const files = new speedseed.Files()

        files.del('.core', () => {
            const data = this.config.getAll()

            require('./files/_babelrc.js')(data)
            require('./files/_bower.js')(data)
            require('./files/_bowerrc.js')(data)
            require('./files/_core-config.js')(data)
            require('./files/_eslintrc.js')(data)
            require('./files/_package.js')(data)

            super.create('seed/core', './.core', false)
            super.create('seed/editorconfig', './.editorconfig')
            super.create('seed/gitignore', './.gitignore')
            super.create('seed/gulpfile.js', './gulpfile.js')
        })
    }
}