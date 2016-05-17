module.exports = ($) => {
    'use strict'

    $.gulp.task('watch', () => {
        setTimeout(() => {
            $.gulp.watch([`${$.build.dir}/**/*`], (event) => {
                const FILE_NAME = $.path.relative(__dirname, event.path)

                $.tinylr.changed({
                    body: {
                        files: [FILE_NAME]
                    }
                })
            })

            $.gulp.watch([
                `${$.app.dir}/**/*.html`,
                `!${$.app.dir}/**/_*.html`,
                `!${$.app.dir}/**/_**/**/*.html`,

                `${$.app.dir}/**/*.json`,
                `!${$.app.dir}/**/_*.json`,
                `!${$.app.dir}/**/_**/**/*.json`
            ], ['copy-files'])

            $.gulp.watch([
                `${$.app.dir}/**/*.${$.yo.preprocessorCSS}`,

                `!${$.app.dir}/**/.*.${$.yo.preprocessorCSS}`,
                `!${$.app.dir}/**/.**/**/*.${$.yo.preprocessorCSS}`,

                `!${$.app.dir}/**/_*.${$.yo.preprocessorCSS}`,
                `!${$.app.dir}/**/_**/**/*.${$.yo.preprocessorCSS}`,

                `!${$.app.dir}/**/-*.${$.yo.preprocessorCSS}`,
                `!${$.app.dir}/**/-**/**/*.${$.yo.preprocessorCSS}`
            ], ['css'])

            $.gulp.watch([
                `${$.app.dir}/**/*.jade`,

                `!${$.app.dir}/**/.*.jade`,
                `!${$.app.dir}/**/.**/**/*.jade`,

                `!${$.app.dir}/**/_*.jade`,
                `!${$.app.dir}/**/_**/**/*.jade`,

                `!${$.app.dir}/**/-*.jade`,
                `!${$.app.dir}/**/-**/**/*.jade`
            ], () => $.runSequence(['css-app', 'html-app'], 'html', 'clean-app'))

            $.gulp.watch([
                `${$.app.dir}/**/*.js`,
                `!${$.app.dir}/**/*.spec.js`,

                `!${$.app.dir}/**/.*.js`,
                `!${$.app.dir}/**/.**/**/*.js`,

                `!${$.app.dir}/**/_*.js`,
                `!${$.app.dir}/**/_**/**/*.js`,

                `!${$.app.dir}/**/-*.js`,
                `!${$.app.dir}/**/-**/**/*.js`
            ], () => $.runSequence('html-app', 'js', 'clean-app'))

            $.gulp.watch([
                `${$.app.dir}/**/*.jsx`,

                `!${$.app.dir}/**/.*.jsx`,
                `!${$.app.dir}/**/.**/**/*.jsx`,

                `!${$.app.dir}/**/_*.jsx`,
                `!${$.app.dir}/**/_**/**/*.jsx`,

                `!${$.app.dir}/**/-*.jsx`,
                `!${$.app.dir}/**/-**/**/*.jsx`
            ], () => $.runSequence('html-app', 'jsx', 'clean-app'))

            $.gulp.watch([
                `${$.app.dir}/**/.*.spec.js`
            ], () => $.runSequence('js-app', 'js-test', 'clean-app'))

            $.gulp.watch(`${$.app.dir}/**/_*.js`, ['html-js'])
        }, 2000)
    })
}