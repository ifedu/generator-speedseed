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

            $.gulp.watch([
                `${$.dev.dir}/**/*.jade`,
                `!${$.dev.dir}/**/---*.jade`,
                `!${$.dev.dir}/**/_*.jade`,
                `!${$.dev.dir}/**/_**/**/*.jade`
            ], () => $.runSequence('html', 'template-cache'))

            $.gulp.watch([
                `${$.dev.dir}/**/*.js`,
                `!${$.dev.dir}/**/---*.js`,
                `!${$.dev.dir}/**/_*.js`,
                `!${$.dev.dir}/**/_**/**/*.js`
            ], ['js'])

            $.gulp.watch([
                `${$.dev.dir}/**/*.jsx`,
                `!${$.dev.dir}/**/_*.jsx`,
                `!${$.dev.dir}/**/_**/**/*.jsx`
            ], () => $.runSequence('html-dev', 'jsx', 'clean-dev'))

            $.gulp.watch(`${$.dev.dir}/**/_*.js`, ['html-js'])

            $.gulp.watch([
                `${$.dev.dir}/**/*.styl`,
                `!${$.dev.dir}/**/---*.styl`,
                `!${$.dev.dir}/**/_*.styl`,
                `!${$.dev.dir}/**/_**/**/*.styl`
            ], ['css'])
        }, 2000)
    })
}