'use strict'

const $ = {
    changed: require('gulp-changed'),
    // data: require('gulp-data'),
    // extend: require('extend'),
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

    // jsonData: {},

    readFolder(folder) {
        const PATH = this.path.join(__dirname, folder)

        const FILES = this.fs.readdirSync(PATH)

        FILES.forEach((file) => require(`${$.tasks}/${file}`)($))
    }
}

$.fn = {
    // jsonJade(file) {
    //     const NAME = file.path

    //     const FILEJADE = $.path.basename(NAME, '.jade')

    //     let dirname = $.path.dirname(NAME)
    //     dirname = dirname.replace(`${$.path.sep}dev${$.path.sep}`, `${$.path.sep}deploy${$.path.sep}`)

    //     const ROUTE = $.path.resolve(__dirname, dirname, '_' + FILEJADE + '.js')

    //     const JSON_FILE = ($.fs.existsSync(ROUTE)) ? require(ROUTE) : {}

    //     delete require.cache[ROUTE]

    //     $.extend(true, $.jsonData, JSON_FILE)

    //     return $.jsonData
    // },
}

module.exports = $