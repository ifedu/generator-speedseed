module.exports = ($, gulp) => {
    const watch = require('gulp-watch')

    const ext = $.options.js.getExtCompiler($)

    gulp.task('reload', () => {
        $.if.notInclude = true

        $.reload && $.reload()
    })

    gulp.task('watch', () => {
        const copy = () => {
            watch([
                `${$.app.dir}/**/*.css`,
                `${$.app.dir}/**/*.html`,
                `${$.app.dir}/**/*.json`
            ], () => $.runSequence('copy-files', 'reload'))
        }

        setTimeout(() => {
            copy()

            // CSS
            watch([
                `${$.app.dir}/**/*.${$.yo.tpl.css}`,
                `!${$.app.dir}/**/.*.${$.yo.tpl.css}`
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
                `${$.app.dir}/**/.*.${$.yo.tpl.css}`,
                `${$.app.dir}/**/.*.jade`
            ], () => {
                $.if.notInclude = false

                return ($.yo.tpl.framework !== 'react')
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