module.exports = ($) => {
    'use strict'

    $.gulp.task('js-test', () => {
        const babel = require('gulp-babel')

        return $
        .gulp
        .src([
            `${$.deploy.dir}/**/*.test.js`
        ])
        .pipe($.changed($.deploy.dir))
        .pipe(babel())
        .pipe($.gulp.dest($.deploy.dir))
    })

    $.gulp.task('karma', (done) => {
        const karma = require('karma')

        karma.server.start({
            configFile: $.path.resolve(__dirname, '../karma.conf.js')
        }, () => done)

        setTimeout(() => {
            $.gulp.watch([
                `${$.deploy.dir}/**/*.test.js`
            ], ['js-test'])
        }, 2000)
    })
}