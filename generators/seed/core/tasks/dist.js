module.exports = ($) => {
    'use strict'

    $.gulp.task('oneJS', (done) => {
        const useref = require('gulp-useref')

        return $
        .gulp
        .src($.build.index)
        .pipe(require('gulp-useref')())
        .pipe($.gulp.dest($.build.dir))
    })

    $.gulp.task('compress-html', () => {
        const htmlmin = require('gulp-htmlmin')

        return $
        .gulp
        .src(`${$.build.dir}/**/*.html`)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe($.gulp.dest($.build.dir))
    })

    $.gulp.task('compress-js', () => {
        const uglify = require('gulp-uglify')

        return $
        .gulp
        .src(`${$.build.dir}/**/*.js`)
        .pipe(uglify())
        .pipe($.gulp.dest($.build.dir))
    })

    $.gulp.task('minified', (cb) => {
        if ($.config.dist === true) {
            return $.runSequence('oneJS', ['compress-html', 'compress-js'], 'clean-dist', cb)
        }

        cb()
    })
}