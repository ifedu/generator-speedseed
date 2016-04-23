module.exports = ($) => {
    'use strict'

    $.gulp.task('js-test', () => {
        const babel = require('gulp-babel')
        
        return $
        .gulp
        .src([
            `${$.dev.dir}/**/*.spec.js`
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
                `${$.dev.dir}/**/*.spec.js`
            ], ['scripts-js-test'])
        }, 2000)
    })
}