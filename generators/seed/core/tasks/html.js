module.exports = ($) => {
    'use strict'

    $.gulp.task('html', () => {
        const data = require('gulp-data')
        const gulpif = require('gulp-if')
        const jade = require('gulp-jade')
        const jadeInheritance  = require('gulp-jade-inheritance')

        $.resetPropsHtml()

        const filter = $.filter([
            `**/*`,

            `!**/.*.jade`,
            `!**/.**/**/*.jade`,

            `!**/_*.jade`,
            `!**/_**/**/*.jade`
        ])

        return $
        .gulp
        .src([
            `${$.app.dir}/**/*.jade`
        ])
        .pipe(gulpif($.if.notInclude, $.changed($.build.dir, {extension: '.html'})))
        .pipe($.plumber())
        .pipe(jadeInheritance({basedir: $.app.dir}))
        .pipe(filter)
        .pipe(data((file) => $.getJsProps(file, '.jade')))
        .pipe(jade({
            pretty: true
        }))
        .pipe($.gulp.dest($.build.dir))
    })

    $.gulp.task('html-app', () => {
        const data = require('gulp-data')
        const jade = require('gulp-jade')
        const rename = require('gulp-rename')

        $.resetPropsHtml()

        return $
        .gulp
        .src([
            `${$.app.dir}/**/.*.jade`
        ])
        .pipe($.changed($.app.dir, {extension: '.html'}))
        .pipe($.plumber())
        .pipe(data((file) => $.getJsProps(file, '.jade')))
        .pipe(jade($.config.html))
        .pipe(rename((path) => path.basename = `-${path.basename}`))
        .pipe($.gulp.dest($.app.dir))
    })
}