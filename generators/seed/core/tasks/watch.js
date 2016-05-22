module.exports = ($) => {
    'use strict'

    const watch = require('gulp-watch')

    $.gulp.task('watch', () => {
        setTimeout(() => {
            watch([`${$.build.dir}/**/*`], (event) => {
                const FILE_NAME = $.path.relative(__dirname, event.path)

                $.tinylr.changed({
                    body: {
                        files: [FILE_NAME]
                    }
                })
            })

            // COPY
            watch([
                `${$.app.dir}/**/*.html`,
                `!${$.app.dir}/**/-*.html`,
                `!${$.app.dir}/**/_*.html`,
                `!${$.app.dir}/**/_**/**/*.html`,

                `${$.app.dir}/**/*.json`,
                `!${$.app.dir}/**/-*.json`,
                `!${$.app.dir}/**/_*.json`,
                `!${$.app.dir}/**/_**/**/*.json`
            ], () => $.runSequence('copy-files'))

            // CSS
            watch([
                `${$.app.dir}/**/*.${$.yo.preprocessorCSS}`
            ], () => {
                $.if.notInclude = false
                return $.runSequence('css', 'clean-app')
            })

            // CSS INCLUDE
            watch([
                `${$.app.dir}/**/.*.${$.yo.preprocessorCSS}`
            ], () => {
                $.if.notInclude = false
                return $.runSequence(['css-app', 'html-app', 'js-app'], 'html', 'clean-app')
            })

            // HTML
            watch([
                `${$.app.dir}/**/*.jade`
            ], () => $.runSequence(['css-app', 'html-app', 'js-app'], 'html', 'clean-app'))

            // // HTML-INCLUDE
            watch([
                `${$.app.dir}/**/.*.jade`
            ], () => {
                $.if.notInclude = false
                return $.runSequence(['css-app', 'html-app', 'js-app'], ['html', 'js', 'jsx'], 'clean-app')
            })

            // JS
            watch([
                `${$.app.dir}/**/*.js`,
                `!${$.app.dir}/**/*.spec.js`,

                `!${$.app.dir}/**/_*.js`,
                `!${$.app.dir}/**/_**/**/*.js`,

                `!${$.app.dir}/**/.*.js`,
                `!${$.app.dir}/**/.**/**/*.js`,

                `!${$.app.dir}/**/-*.js`,
                `!${$.app.dir}/**/-**/**/*.js`
            ], () => $.runSequence('html-app', 'js', 'clean-app'))

            // JS INCLUDE
            watch([
                `${$.app.dir}/**/.*.js`
            ], () => {
                $.if.notInclude = false
                return $.runSequence(['css-app', 'html-app', 'js-app'], 'html', 'clean-app')
            })

            // JSX
            watch([
                `${$.app.dir}/**/*.jsx`,

                `!${$.app.dir}/**/_*.jsx`,
                `!${$.app.dir}/**/_**/**/*.jsx`,

                `!${$.app.dir}/**/-*.jsx`,
                `!${$.app.dir}/**/-**/**/*.jsx`
            ], () => $.runSequence('html-app', 'jsx', 'clean-app'))

            // TEST
            watch([
                `${$.app.dir}/**/.*.spec.js`
            ], () => $.runSequence('js-app', 'js-test', 'clean-app'))
        }, 2000)
    })
}