module.exports = ($) => {
    'use strict'

    // $.gulp.task('scripts-js-test', () =>
    //     $.gulp
    //     .src([
    //         `${$.dev.dir}/**/*.config.js`,
    //         `${$.dev.dir}/**/*.spec.js`
    //     ])
    //     .pipe($.changed($.deploy.dir))
    //     .pipe($.babel())
    //     .pipe($.gulp.dest($.deploy.dir))
    // )

    // $.gulp.task('karma', (done) => {
    //     $.karma.start({
    //         configFile: $.path.resolve(__dirname, '../karma.conf.js')
    //     }, () => done)

    //     setTimeout(() => {
    //         $.gulp.watch([
    //             `${$.dev.dir}/**/*.config.js`,
    //             `${$.dev.dir}/**/*.spec.js`
    //         ], ['scripts-js-test'])
    //     }, 2000)
    // })
}