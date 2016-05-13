module.exports = ($) => {
    'use strict'

    $.gulp.task('generateOneScriptFile', (done) => {
        const useref = require('gulp-useref')

        const assets = useref.assets()

        return $
        .gulp
        .src($.deploy.index)
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe($.gulp.dest($.deploy.dir))
    })

    $.gulp.task('compress', () => {
        const uglify = require('gulp-uglify')

        return $
        .gulp
        .src(`${$.deploy.dir}/**/*.js`)
        .pipe(uglify())
        .pipe($.gulp.dest($.deploy.dir))
    })

    $.gulp.task('minified', (cb) => {
        if ($.config.dist === true) {
            return $.runSequence('generateOneScriptFile', 'compress', 'clean-min', cb)
        }

        cb()
    })
}