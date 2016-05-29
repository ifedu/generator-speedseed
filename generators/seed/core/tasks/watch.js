module.exports = ($) => {
    'use strict'

    const watch = require('gulp-watch')

    $.gulp.task('watch', () => {
        setTimeout(() => {
            // COPY
            watch([,
                `${$.app.dir}/**/*.css`,
                `!${$.app.dir}/**/-*.css`,
                `!${$.app.dir}/**/_*.css`,
                `!${$.app.dir}/**/_**/**/*.css`,

                `${$.app.dir}/**/*.html`,
                `!${$.app.dir}/**/-*.html`,
                `!${$.app.dir}/**/_*.html`,
                `!${$.app.dir}/**/_**/**/*.html`,

                `${$.app.dir}/**/*.json`,
                `!${$.app.dir}/**/-*.json`,
                `!${$.app.dir}/**/_*.json`,
                `!${$.app.dir}/**/_**/**/*.json`
            ], () => $.runSequence('copy-files', 'clean-app'))

            // CSS
            watch([
                `${$.app.dir}/**/*.${$.yo.css}`,
                `!${$.app.dir}/**/.*.${$.yo.css}`
            ], () => {
                $.if.notInclude = false
                return $.runSequence('css', 'clean-app')
            })

            // HTML
            watch([
                `${$.app.dir}/**/*.jade`,
                `!${$.app.dir}/**/.*.jade`
            ], () => $.runSequence(['css-app', 'html-app', 'js-app'], 'html', 'clean-app'))

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
                `${$.app.dir}/**/.*.js`,

                `${$.app.dir}/**/_*.js`,
                `${$.app.dir}/**/_**/**/*.js`
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

            // INCLUDE
            watch([
                `${$.app.dir}/**/_*.html`,
                `${$.app.dir}/**/.*.${$.yo.css}`,
                `${$.app.dir}/**/.*.jade`
            ], () => {
                $.if.notInclude = false
                return $.runSequence(['css-app', 'html-app', 'js-app'], ['html', 'js', 'jsx'], 'clean-app')
            })

            // TEST
            watch([
                `${$.app.dir}/**/.*.spec.js`
            ], () => $.runSequence('js-app', 'js-test', 'clean-app'))
        }, 2000)
    })
}