module.exports = ($, gulp) => {
    const watch = require('gulp-watch')

    const ext = $.options.js.getExtCompiler($)

    gulp.task('reload', () => {
        $.if.notInclude = true

        $.reload && $.reload()
    })

    gulp.task('watch', () => {
        setTimeout(() => {
            // COPY
            watch([
                `${$.app.dir}/**/*.css`,
                `!${$.app.dir}/**/.*.css`,

                `${$.app.dir}/**/*.html`,
                `!${$.app.dir}/**/.*.html`,

                `${$.app.dir}/**/*.json`,
                `!${$.app.dir}/**/.*.json`
            ], () => {
                $.if.notInclude = false
                return $.runSequence('copy', 'reload')
            })

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
            ], () => $.runSequence(['css-app', 'html-app', 'html'], 'reload'))

            // JS
            watch([
                `${$.app.dir}/**/*.jsx`,
                `${$.app.dir}/**/*.${ext}`,

                `${$.app.dir}/**/.*.css`,
                `${$.app.dir}/**/.*.html`,

                `!${$.app.dir}/**/*.spec.${ext}`
            ], () => $.runSequence(['css-app', 'html-app', 'js-app'], 'js', 'html', 'reload'))

            // INCLUDE
            watch([
                `${$.app.dir}/**/_*.html`,
                `${$.app.dir}/**/.*.${$.yo.tpl.css}`,
                `${$.app.dir}/**/.*.jade`
            ], () => {
                $.if.notInclude = false

                return ($.yo.tpl.framework !== 'react')
                    ? $.runSequence(['css-app', 'html-app'], ['html', 'js'], 'reload')
                    : $.runSequence(['css-app', 'html-app'], ['html', 'js', 'jsx'], 'reload')
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