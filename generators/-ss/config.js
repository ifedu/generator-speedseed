'use strict'

module.exports = {
    changed: require('gulp-changed'),
    gulp: require('gulp'),
    runSequence: require('run-sequence'),
    tinylr: require('tiny-lr')(),

    // NODE LIBS
    fs: require('fs'),
    path: require('path'),

    plato: './_analysis/plato',
    tasks: './tasks',

    config: {
        dist: false,
        port: 8001,

        css: {
            linenos: true
        },

        html: {
            pretty: true
        }
    },

    deploy: {
        assets: './_deploy-dev/assets',
        dir: './_deploy-dev',
        index: './_deploy-dev/index.html',
        js: './_deploy-dev/js',
        vendor: './_deploy-dev/vendor'
    },

    dev: {
        assets: './dev/assets',
        dir: './dev',
        vendor: './dev/_vendor'
    },

    propsHtml: {},

    getJs(route) {
        delete require.cache[route]

        const JSON_FILE = (this.fs.existsSync(route)) ? require(route) : {}

        const extend = require('extend')
        extend(true, this.propsHtml, JSON_FILE)
    },

    getJsOfHtml(file) {
        const PATH_NAME = file.path
        const FILE_NAME = this.path.basename(PATH_NAME, '.jade')
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
        this.propsHtml = {}

        const ROUTE_GLOBAL = this.path.resolve(__dirname, '../', `${this.dev.dir}/__global.js`)
        this.getJs(ROUTE_GLOBAL)
    },

    setDist() {
        const util = require('gulp-util')

        if (util.env.dist === 'true') {
            this.config = {
                dist: true,
                port: 8002,

                css: {
                    compress: true
                },

                html: {
                    pretty: false
                }
            }

            for (let prop in this.deploy) {
                let value = this.deploy[prop].replace('_deploy-dev', '_deploy-min')

                this.deploy[prop] = value
            }
        }
    }
}