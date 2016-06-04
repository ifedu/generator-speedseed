module.exports = ($, gulp) => {
    'use strict'

    gulp.task('html', () => {
        const changed = require('gulp-changed')
        const data = require('gulp-data')
        const filter = require('gulp-filter')
        const gulpif = require('gulp-if')
        const jade = require('gulp-jade')
        const jadeInheritance  = require('gulp-jade-inheritance')
        const plumber = require('gulp-plumber')

        $.resetPropsHtml()

        return gulp
        .src(`${$.app.dir}/**/*.jade`)
        .pipe(gulpif($.if.notInclude, changed($.build.dir, { extension: '.html' })))
        .pipe(plumber())
        .pipe(jadeInheritance({ basedir: $.app.dir }))
        .pipe(filter($.filterProps('jade')))
        .pipe(data((file) => $.getJsProps(file, '.jade')))
        .pipe(jade({ pretty: true }))
        .pipe(gulp.dest($.build.dir))
    })

    gulp.task('html-app', () => {
        const changed = require('gulp-changed')
        const data = require('gulp-data')
        const jade = require('gulp-jade')
        const plumber = require('gulp-plumber')
        const rename = require('gulp-rename')

        $.resetPropsHtml()

        return gulp
        .src(`${$.app.dir}/**/.*.jade`)
        .pipe(changed($.app.dir, { extension: '.html' }))
        .pipe(plumber())
        .pipe(data((file) => $.getJsProps(file, '.jade')))
        .pipe(jade($.config.html))
        .pipe(rename((path) => path.basename = `-${path.basename.substr(1)}`))
        .pipe(gulp.dest($.app.dir))
    })
}