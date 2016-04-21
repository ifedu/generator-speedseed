'use strict'

module.exports = {
    changed: require('gulp-changed'),
    gulp: require('gulp'),
    // inject: require('gulp-inject'),
    // karma: require('karma').server,
    runSequence: require('run-sequence'),
    tinylr: require('tiny-lr')(),
    // uglify: require('gulp-uglify'),
    // useref: require('gulp-useref'),
    // wrap: require('gulp-wrap'),

    // NODE LIBS
    fs: require('fs'),
    path: require('path'),

    // plato: './_analysis/plato',
    // server: './server',
    tasks: './tasks',

    deploy: {
    //     app: './_deploy/app',
        assets: './_deploy/assets',
        dir: './_deploy',
    //     guide: './_deploy/guide',
    //     guideIndex: './_deploy/guide.html',
    //     index: './_deploy/index.html',
        js: './_deploy/js',
    //     styles: './_deploy/styles',
        vendor: './_deploy/vendor',
    //     views: './_deploy/views'
    },

    dev: {
        assets: './dev/assets',
        dir: './dev',
    //     guide: './dev/guide',
    //     styles: './dev/styles',
        vendor: './dev/_vendor'
    },

    // dist: {
    //     allJs: './_public-dist/js/all.js',
    //     app: './_public-dist/app',
    //     dir: './_public-dist',
    //     index: './_public-dist/index.html',
    //     js: './_public-dist/js',
    //     styles: './_public-dist/styles',
    //     vendor: './_public-dist/vendor'
    // },

    jsonJade(file) {
        const extend = require('extend')

        const NAME = file.path

        const FILEJADE = this.path.basename(NAME, '.jade')

        let dirname = this.path.dirname(NAME)
        dirname = dirname.replace(`${this.path.sep}_dev${this.path.sep}`, `${this.path.sep}deploy${this.path.sep}`)

        const ROUTE = this.path.resolve(__dirname, dirname, `_${FILEJADE}.js`)
        const ROUTE_GLOBAL = this.path.resolve(__dirname, '../', `${this.dev.dir}/__global.js`)

        delete require.cache[ROUTE]
        delete require.cache[ROUTE_GLOBAL]

        const JSON_FILE = (this.fs.existsSync(ROUTE)) ? require(ROUTE) : {}
        const JSON_FILE_GLOBAL = (this.fs.existsSync(ROUTE_GLOBAL)) ? require(ROUTE_GLOBAL) : {}

        const jsonData = {}

        extend(true, jsonData, JSON_FILE_GLOBAL)
        extend(true, jsonData, JSON_FILE)

        return jsonData
    },

    readFolder(folder) {
        const PATH = this.path.join(__dirname, folder)

        const FILES = this.fs.readdirSync(PATH)

        FILES.forEach((file) => require(`${this.tasks}/${file}`)(this))
    }
}