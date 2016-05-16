'use strict'

const coreConfig = require('../.core-config.js')

module.exports = {
    changed: require('gulp-changed'),
    gulp: require('gulp'),
    runSequence: require('run-sequence'),
    tinylr: require('tiny-lr')(),

    // NODE LIBS
    fs: require('fs'),
    path: require('path'),

    app: coreConfig.app,
    build: coreConfig.build,
    dist: coreConfig.dist,
    reports: coreConfig.reports,
    test: coreConfig.test,

    tasks: './tasks',

    config: {
        dist: false,
        port: coreConfig.build.port,

        css: {
            linenos: true
        }
    },

    propsHtml: {},

    getJs(route) {
        delete require.cache[route]

        const JSON_FILE = (this.fs.existsSync(route)) ? require(route) : {}

        const extend = require('extend')
        extend(true, this.propsHtml, JSON_FILE)
    },

    getJsProps(file, ext) {
        const PATH_NAME = file.path
        const FILE_NAME = this.path.basename(PATH_NAME, ext)
        const DIR_NAME = this.path.dirname(PATH_NAME)

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
            include(dir, file, ext) {
                ext = ext || 'html'

                const fs = require('fs')

                return fs.readFileSync(`./${dir}/-.${file}.${ext}`)
            }
        }

        const ROUTE_GLOBAL = this.path.resolve(__dirname, '../', `${this.app.dir}/__global.js`)
        this.getJs(ROUTE_GLOBAL)
    },

    setParams() {
        const util = require('gulp-util')

        if (util.env.open === 'false') {
            this.config.open = false
        }

        if (util.env.dist === 'true') {
            this.config = {
                dist: true,
                port: this.dist.port,

                css: {
                    compress: true
                }
            }

            const buildDir = this.build.dir

            for (let prop in this.build) {
                let value = this.build[prop].toString().replace(buildDir, this.dist.dir)

                this.build[prop] = value
            }
        }
    }
}