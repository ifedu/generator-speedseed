'use strict'

const $ = {
    // babel: require('gulp-babel'),
    // changed: require('gulp-changed'),
    // connect: require('connect-livereload'),
    // data: require('gulp-data'),
    // del: require('del'),
    // express: require('express'),
    // extend: require('extend'),
    gulp: require('gulp'),
    // inject: require('gulp-inject'),
    // jade: require('gulp-jade'),
    // karma: require('karma').server,
    // ngAnnotate: require('gulp-ng-annotate'),
    // open: require('open'),
    // request: require('request'),
    // runSequence: require('run-sequence'),
    // styles: require('gulp-stylus'),
    // templateCache: require('gulp-angular-templatecache'),
    // tinylr: require('tiny-lr')(),
    // uglify: require('gulp-uglify'),
    // useref: require('gulp-useref'),
    // wrap: require('gulp-wrap'),

    // NODE LIBS
    fs: require('fs'),
    path: require('path'),

    // plato: './_analysis/plato',
    // server: './server',
    tasks: './tasks',

    // dev: {
    //     assets: './dev/assets',
    //     dir: './dev',
    //     guide: './dev/guide',
    //     styles: './dev/styles',
    //     vendor: './dev/_vendor'
    // },

    // deploy: {
    //     app: './_deploy/app',
    //     assets: './_deploy/assets',
    //     dir: './_deploy',
    //     guide: './_deploy/guide',
    //     guideIndex: './_deploy/guide.html',
    //     index: './_deploy/index.html',
    //     js: './_deploy/js',
    //     styles: './_deploy/styles',
    //     vendor: './_deploy/vendor',
    //     views: './_deploy/views'
    // },

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