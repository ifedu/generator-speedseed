'use strict'

module.exports = {
    changed: require('gulp-changed'),
    gulp: require('gulp'),
    runSequence: require('run-sequence'),
    tinylr: require('tiny-lr')(),

    // NODE LIBS
    fs: require('fs'),
    path: require('path'),

    // plato: './_analysis/plato',
    // server: './server',
    tasks: './tasks',

    deploy: {
    //     app: './_deploy-dev/app',
        assets: './_deploy-dev/assets',
        dir: './_deploy-dev',
    //     guide: './_deploy-dev/guide',
    //     guideIndex: './_deploy-dev/guide.html',
        index: './_deploy-dev/index.html',
        js: './_deploy-dev/js',
        jsVendor: './_deploy-dev/js/vendor'
    //     styles: './_deploy-dev/styles',
    //     views: './_deploy-dev/views'
    },

    dev: {
        assets: './dev/assets',
        dir: './dev',
    //     guide: './dev/guide',
    //     styles: './dev/styles',
        jsVendor: './dev/js/_vendor'
    },

    config: {
        css: {},
        html: {}
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
    }
}