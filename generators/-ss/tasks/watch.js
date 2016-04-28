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

            $.gulp.watch(`${$.dev.dir}/**/*.jade`, () => $.runSequence('html', 'templateCache'))

            $.gulp.watch([
                `${$.dev.dir}/**/*.js`,
                `!${$.dev.dir}/**/_*.js`,
                `!${$.dev.dir}/**/*.spec.js`
            ], ['js'])

            $.gulp.watch(`${$.dev.dir}/**/_*.js`, ['html-js'])

            $.gulp.watch(`${$.dev.dir}/**/*.styl`, ['css'])
        }, 2000)
    })
}