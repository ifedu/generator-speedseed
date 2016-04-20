module.exports = ($) => {
    'use strict'

    $.gulp.task('watch', () => {
        setTimeout(() => {
            $.gulp.watch([`${$.deploy.dir}/**/*`], (event) => {
                const FILE_NAME = $.path.relative(__dirname, event.path)

                $.tinylr.changed({
                    body: {
                        files: [FILE_NAME]
                    }
                })
            })

    //         $.gulp.watch(`${$.dev.dir}/**/*.jade`, () => $.runSequence('jade', 'templateCache'))

    //         $.gulp.watch([
    //             `${$.dev.dir}/**/*.js`,
    //             `!${$.dev.dir}/**/_*.js`,
    //             `!${$.dev.dir}/**/*.config.js`,
    //             `!${$.dev.dir}/**/*.spec.js`
    //         ], ['scripts'])

    //         $.gulp.watch(`${$.dev.dir}/**/_*.js`, ['jade-script'])

    //         $.gulp.watch(`${$.dev.dir}/**/*.styl`, ['styles'])

    //         $.gulp.watch(`${$.dev.guide}/**/*.styl`, ['styles-guide'])
    //         $.gulp.watch(`${$.dev.serverTasks}/*.js`, ['compile'])
        }, 2000)
    })
}