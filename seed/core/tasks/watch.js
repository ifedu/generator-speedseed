module.exports = ($, gulp) => {
    const watch = require('gulp-watch')

    const ext = $.options.compiler.getExtCompiler($)

    gulp.task('reload', () => {
        $.if.notInclude = true

        $.reload && $.reload()
    })

    gulp.task('watch', () => {
        setTimeout(() => {
            // COPY
            watch([
                `${$.app.dir}/**/*.css`,
                `!${$.app.dir}/**/-*.css`,
                `!${$.app.dir}/**/_*.css`,
                `!${$.app.dir}/**/_**/**/*.css`
            ], () => $.runSequence('copy-css', 'reload'))

            watch([
                `${$.app.dir}/**/*.html`,
                `!${$.app.dir}/**/-*.html`,
                `!${$.app.dir}/**/_*.html`,
                `!${$.app.dir}/**/_**/**/*.html`
            ], () => $.runSequence('copy-html', 'reload'))

            watch([
                `${$.app.dir}/**/*.json`,
                `!${$.app.dir}/**/-*.json`,
                `!${$.app.dir}/**/_*.json`,
                `!${$.app.dir}/**/_**/**/*.json`
            ], () => $.runSequence('copy-json', 'reload'))

            // CSS
            watch([
                `${$.app.dir}/**/*.${$.yo.css}`,
                `!${$.app.dir}/**/.*.${$.yo.css}`
            ], () => {
                $.if.notInclude = false
                return $.runSequence('css', 'reload')
            })

            // HTML
            watch([
                `${$.app.dir}/**/*.jade`,
                `!${$.app.dir}/**/.*.jade`
            ], () => $.runSequence(['css-app', 'html-app', 'js-app'], 'html', 'reload'))

            // JS
            watch([
                `${$.app.dir}/**/*.${ext}`,
                `!${$.app.dir}/**/*.spec.${ext}`,

                `!${$.app.dir}/**/_*.${ext}`,
                `!${$.app.dir}/**/_**/**/*.${ext}`,

                `!${$.app.dir}/**/.*.${ext}`,
                `!${$.app.dir}/**/.**/**/*.${ext}`,

                `!${$.app.dir}/**/-*.${ext}`,
                `!${$.app.dir}/**/-**/**/*.${ext}`
            ], () => $.runSequence(['css-app', 'html-app'], 'js', 'reload'))

            // JS INCLUDE
            watch([
                `${$.app.dir}/**/.*.${ext}`,

                `${$.app.dir}/**/_*.${ext}`,
                `${$.app.dir}/**/_**/**/*.${ext}`
            ], () => {
                $.if.notInclude = false
                return $.runSequence(['css-app', 'html-app', 'js-app'], 'html', 'reload')
            })

            // JSX
            watch([
                `${$.app.dir}/**/*.jsx`,

                `!${$.app.dir}/**/_*.jsx`,
                `!${$.app.dir}/**/_**/**/*.jsx`,

                `!${$.app.dir}/**/-*.jsx`,
                `!${$.app.dir}/**/-**/**/*.jsx`
            ], () => $.runSequence('html-app', 'jsx', 'reload'))

            // INCLUDE
            watch([
                `${$.app.dir}/**/_*.html`,
                `${$.app.dir}/**/.*.${$.yo.css}`,
                `${$.app.dir}/**/.*.jade`
            ], () => {
                $.if.notInclude = false

                return ($.yo.framework !== 'react')
                    ? $.runSequence(['css-app', 'html-app', 'js-app'], ['html', 'js'], 'reload')
                    : $.runSequence(['css-app', 'html-app', 'js-app'], ['html', 'js', 'jsx'], 'reload')
            })
            // TEST
            watch(
                `${$.app.dir}/**/*.spec.${ext}`,
                () => ($.test.singleRun === false)
                    ? $.runSequence('js-spec', 'reload')
                    : $.runSequence('js-spec', 'js-test', 'reload')
            )
        }, 2000)
    })
}