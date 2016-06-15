'use strict'

const config = require('../_config.js')
const generators = require('yeoman-generator')

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments)

        this.config.set('coreVersion', 'generator-speedseed version 0.14.2')
        this.config.set('component', '')

        console.log(this.config.get('coreVersion'))
    },

    write() {
        this.composeWith('speedseed:project')
        this.composeWith('speedseed:template')
        this.composeWith('speedseed:framework')
        this.composeWith('speedseed:compiler')
        this.composeWith('speedseed:css')
        this.composeWith('speedseed:test')
    },

    end() {
        const create = config.create.bind(this)

        const ext = {
            babeljs: '.js',
            coffeescript: '.coffee',
            typescript: '.ts'
        }

        const css = this.config.get('css')
        const compiler = this.config.get('compiler')
        const component = this.config.get('component')
        const framework = this.config.get('framework')
        const template = this.config.get('template')
        const test = this.config.get('test')

        this.config.set('compilerExt', ext[compiler])
        const compilerExt = this.config.get('compilerExt')

        // CORE
        const seed = '../../seed'

        config.del.call(this, '.core')
        create(`${seed}/core`, './.core', false)

        // ROOT
        create(`${seed}/babelrc`, './.babelrc')
        create(`${seed}/bowerrc`, './.bowerrc')
        create(`${seed}/editorconfig`, './.editorconfig')
        create(`${seed}/eslintrc`, './.eslintrc')
        create(`${seed}/gitignore`, './.gitignore')

        create(`${seed}/bower.json`, './bower.json')
        create(`${seed}/gulpfile.js`, './gulpfile.js')

        require('./_core-config.js').call(this)
        require('./_package.js').call(this)

        //// TEMPLATE
        const route = `${seed}/template/${template}`

        // COMPILER
        if (compiler === 'typescript') {
            create(`${route}/${framework}/compiler/${compiler}/typings`, './typings')
            create(`${route}/${framework}/compiler/${compiler}/typings.json`, './typings.json')
        }

        if (template !== 'no') {
            // CSS
            create(`${route}/all/css/${css}/app`, './app', true)
            create(`${route}/${framework}/css/${css}/app`, './app', true)
            // FRAMEWORK
            create(`${route}/all/compiler/${compiler}/app`, './app', true)
            create(`${route}/${framework}/compiler/all/app`, './app', true)
            create(`${route}/${framework}/compiler/${compiler}/app`, './app', true)
        }

        // TEST
        if (test !== 'no') {
            create(`${seed}/test/${test}/karma.conf.js`, './.core/karma.conf.js', false)
        }
    }
})