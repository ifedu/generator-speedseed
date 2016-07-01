'use strict'

const $ = require('../_config.js')

module.exports = require('yeoman-generator').Base.extend({
    paths() {
        $.paths.call(this)
    },

    write() {
        $.del.call(this, '.core', () => {
            require('./files/_babelrc.js').call(this)
            require('./files/_bower.js').call(this)
            require('./files/_bowerrc.js').call(this)
            require('./files/_core-config.js').call(this)
            require('./files/_eslintrc.js').call(this)
            require('./files/_package.js').call(this)

            const create = $.create.bind(this)

            const seed = '../seed'

            create(`${seed}/core`, './.core', false)
            create(`${seed}/editorconfig`, './.editorconfig')
            create(`${seed}/gitignore`, './.gitignore')
            create(`${seed}/gulpfile.js`, './gulpfile.js')

            create(`${seed}/template/test/${this.config.get('test')}/karma.conf.js`, './.core/karma.conf.js')
        })
    }
})