module.exports = ($) => {
    // 'use strict'

    // $.gulp.task('jade', () =>
    //     $.gulp
    //     .src([
    //         `${$.dev.dir}/**/*.jade`,
    //         `!${$.dev.dir}/**/_*.jade`,
    //         `!${$.dev.dir}/**/_**/**/*.jade`
    //     ])
    //     .pipe($.changed($.deploy.dir, {extension: '.html'}))
    //     .pipe($.data((file) => $.fn.jsonJade(file)))
    //     .pipe($.jade({
    //         pretty: true
    //     }))
    //     .on('error', (error) => {
    //         console.log(error)
    //     })
    //     .pipe($.gulp.dest($.deploy.dir))
    // )

    // $.gulp.task('jade-script', () =>
    //     $.gulp
    //     .src([`${$.dev.dir}/**/_*.js`])
    //     .pipe($.changed($.deploy.dir))
    //     .pipe($.babel())
    //     .pipe($.gulp.dest($.deploy.dir))
    //     .pipe($.data((fileJs) => {
    //         // JADE IN _DEPLOY
    //         const FILE_JADE = fileJs.path
    //             .replace(`${$.path.sep}_deploy`, `${$.path.sep}dev`)
    //             .replace(`${$.path.sep}_`, $.path.sep)
    //             .replace('.js', '.jade')

    //         // ROUTE DIR OF JADE
    //         let dirJade = fileJs.path.split($.path.sep)
    //         dirJade.pop()
    //         dirJade = dirJade.join($.path.sep)

    //         // COMPILE JADE
    //         $.gulp
    //         .src(FILE_JADE)
    //         .pipe($.data((file) => $.fn.jsonJade(file)))
    //         .pipe($.jade({
    //             pretty: true
    //         }))
    //         .on('error', (error) => {
    //             console.log(error)
    //         })
    //         .pipe($.gulp.dest(dirJade))
    //     }))
    // )
}