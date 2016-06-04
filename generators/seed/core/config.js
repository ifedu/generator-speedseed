'use strict'

const coreConfig = require('../.core-config.js')

module.exports = {
    changed: require('gulp-changed'),
    filter: require('gulp-filter'),
    gulp: require('gulp'),
    plumber: require('gulp-plumber'),
    runSequence: require('run-sequence'),

    // NODE LIBS
    fs: require('fs'),
    path: require('path'),

    app: coreConfig.app,
    build: coreConfig.build,
    dist: coreConfig.dist,
    indent: coreConfig.indent,
    reports: coreConfig.reports,
    server: coreConfig.server,
    test: coreConfig.test,

    tasks: './tasks',

    config: {
        dist: false,
        port: coreConfig.build.port,

        less: {
        },

        sass: {
        },

        scss: {
        },

        styl: {
            linenos: true
        }
    },

    filterProps: [
        `**/*`,
        `!**/*.spec.js`,

        `!**/.*.js`,
        `!**/.**/**/*.js`,

        `!**/_*.js`,
        `!**/_**/**/*.js`,

        `!**/-*.js`,
        `!**/-**/**/*.js`
    ],

    if: {
        notInclude: true
    },

    options: {
        css: require('./options/css.js'),
        framework: require('./options/framework.js')
    },

    propsHtml: {},

    template: {
        'evaluate': /{%=([\s\S]+?)%}/g,
        'interpolate': /{%=([\s\S]+?)%}/g
    },

    yo: require('./props-tpl.js'),

    getJs(route) {
        const extend = require('extend')

        delete require.cache[route]

        const JSON_FILE = (this.fs.existsSync(route)) ? require(route) : {}

        extend(true, this.propsHtml, JSON_FILE)
    },

    getJsProps(file, ext) {
        const FILE_NAME = this.path.basename(file.path, ext)
        const DIR_NAME = this.path.dirname(file.path)

        const ROUTE_LOCAL = this.path.resolve(__dirname, DIR_NAME, `_${FILE_NAME}.js`)
        this.getJs(ROUTE_LOCAL)

        return this.propsHtml
    },

    readFolder(folder) {
        const PATH = this.path.join(__dirname, folder)

        const FILES = this.fs.readdirSync(PATH)

        FILES.forEach((file) => require(`${this.tasks}/${file}`)(this))
    },

    resetPropsHtml() {
        this.propsHtml = {
            include(dir, file) {
                const fs = require('fs')
                const path = require('path')

                const fileNormalize = path.normalize(`${dir}/${file}`)

                return fs.readFileSync(fileNormalize)
            }
        }

        const ROUTE_GLOBAL = this.path.resolve(__dirname, '../', `${this.app.dir}/__global.js`)
        this.getJs(ROUTE_GLOBAL)
    },

    setParams() {
        const util = require('gulp-util')

        if (util.env.dist === 'true') {
            this.config = {
                dist: true,
                port: this.dist.port,

                less: {
                    compress: true
                },

                sass: {
                    outputStyle: 'compressed'
                },

                scss: {
                    outputStyle: 'compressed'
                },

                styl: {
                    compress: true
                }
            }

            this.build = this.dist
        }

        if (util.env.open === 'false') this.config.open = false
        if (util.env.server === 'false') this.config.server = false
    }
}