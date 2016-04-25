module.exports = ($) => {
    'use strict'
    // )

    // $.gulp.task('styles-dist', () =>
    //     $.gulp
    //     .src(`${$.dev.styles}/main.styl`)
    //     .pipe($.styles({
    //         compress: true
    //     }))
    //     .pipe($.gulp.dest($.dist.styles))
    // )

    // $.gulp.task('copyDeploy', (done) =>
    //     $.gulp
    //     .src([
    //         `${$.deploy.dir}/**/*.*`,
    //         `${$.deploy.vendor}/**/*.*`
    //     ])
    //     .pipe($.gulp.dest($.dist.dir))
    // )

    // $.gulp.task('generateOneScriptFile', (done) => {
    //     const assets = $.useref.assets()

    //     return $.gulp
    //     .src($.dist.index)
    //     .pipe(assets)
    //     .pipe(assets.restore())
    //     .pipe($.useref())
    //     .pipe($.gulp.dest($.dist.dir))
    // })

    // $.gulp.task('compress', () =>
    //     $.gulp
    //     .src(`${$.dist.dir}/**/*.js`)
    //     .pipe($.uglify())
    //     .pipe($.gulp.dest($.dist.dir))
    // )

    // $.gulp.task('clean-dist', (cb) =>
    //     $.del([
    //         $.deploy.dir,
    //         $.dist.dir
    //     ], FORCE, cb)
    // )

    // $.gulp.task('clean-min', (cb) =>
    //     $.del([
    //         `${$.dist.js}/**/*.js`,
    //         $.dist.vendor,
    //         `!${$.dist.js}/all.js`,
    //         `${$.dist.dir}/**/_*`,
    //         `${$.dist.dir}/**/_**/**/*`
    //     ], {
    //         force: true
    //     }, cb)
    // )

    // $.gulp.task('templateCache-dist', (done) =>
    //     $.gulp.src(`${$.dist.dir}/**/directives/**/*.html`)
    //     .pipe($.templateCache('templates.js', {
    //         standalone: true
    //     }))
    //     .pipe($.gulp.dest($.dist.js))
    // )

    // $.gulp.task('webserver-dist', () => require(`../${$.server}/server-dist.js`)($))

    // $.gulp.task('distTask', (cb) => $.runSequence('generateOneScriptFile', 'compress', 'clean-min', cb))
}