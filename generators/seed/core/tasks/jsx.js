module.exports = ($, gulp) => {
    'use strict'

    gulp.task('jsx', () => {
        const babel = require('gulp-babel')
        const data = require('gulp-data')
        const extend = require('extend')
        const gulpif = require('gulp-if')
        const plumber = require('gulp-plumber')
        const react = require('gulp-react')
        const template = require('gulp-template')

        $.resetPropsHtml()

        return gulp
        .src(`${$.app.dir}/**/*.jsx`)
        .pipe(gulpif($.if.notInclude, $.changed(dir)))
        .pipe(plumber())
        .pipe(modifyFile((content, route) => $.translateTpl(content, route, 'jsx')))
        .pipe(react())
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest(dir))
    })
}