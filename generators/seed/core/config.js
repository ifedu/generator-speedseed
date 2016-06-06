'use strict'

const fs = require('fs')

const coreConfig = JSON.parse(fs.readFileSync('./.core-config.js', 'utf8'))
const extend = require('extend')

const $ = {
    runSequence: require('run-sequence'),

    tasks: './tasks',

    config: {
        dist: false,
        port: coreConfig.build.port,

        less: {},

        sass: {},

        scss: {},

        styl: {
            linenos: true
        }
    },

    if: {
        notInclude: true
    },

    options: {
        css: require('./options/css.js'),
        compiler: require('./options/compiler.js'),
        framework: require('./options/framework.js')
    },

    yo: require('../.yo-rc.json')['generator-speedseed'],

    getJs(route) {
        delete require.cache[route]

        const JSON_FILE = (fs.existsSync(route)) ? require(route) : {}

        extend(true, this.propsHtml, JSON_FILE)
    },

    getJsProps(file, ext) {
        const path = require('path')

        const DIR_NAME = path.dirname(file.path)
        const FILE_NAME = path.basename(file.path, ext)

        const ROUTE_LOCAL = path.resolve(__dirname, DIR_NAME, `_${FILE_NAME}.js`)
        this.getJs(ROUTE_LOCAL)

        return this.propsHtml
    },

    filterProps(ext) {
        return [
            `**/*`,
            `!**/*.spec.${ext}`,

            `!**/.*.${ext}`,
            `!**/.**/**/*.${ext}`,

            `!**/_*.${ext}`,
            `!**/_**/**/*.${ext}`,

            `!**/-*.${ext}`,
            `!**/-**/**/*.${ext}`
        ]
    },

    readFolder(folder) {
        const path = require('path')

        const PATH = path.join(__dirname, folder)

        const FILES = fs.readdirSync(PATH)

        FILES.forEach((file) => require(`${this.tasks}/${file}`)(this, require('gulp')))
    },

    resetPropsHtml() {
        const path = require('path')

        this.propsHtml = {
            include(dir, file) {
                const path = require('path')

                const fileNormalize = path.normalize(`${dir}/${file}`)

                return fs.readFileSync(fileNormalize)
            }
        }

        const ROUTE_GLOBAL = path.resolve(__dirname, '../', `${this.app.dir}/__global.js`)

        this.getJs(ROUTE_GLOBAL)
    },

    setParams() {
        const util = require('gulp-util')

        if (util.env.dist === 'true') {
            this.config.dist = true
            this.config.port = coreConfig.dist.port
            this.config.less.compress = true
            this.config.sass.outputStyle = 'compressed'
            this.config.scss.outputStyle = 'compressed'
            this.config.styl.compress = true

            this.build = this.dist
        }

        if (util.env.open === 'false') this.config.open = false
        if (util.env.server === 'false') this.config.server = false
    },

    translateTpl(content, route, ext) {
        const _ = require('lodash')
        const path = require('path')

        const dataTpl = extend(true, {}, this.getJsProps(route, ext))

        dataTpl.__dirname = path.dirname(route)

        return _.template(content, {
            'evaluate': /{%=([\s\S]+?)%}/g,
            'interpolate': /{%=([\s\S]+?)%}/g
        })(dataTpl)
    }
}

extend($, coreConfig)

module.exports = $