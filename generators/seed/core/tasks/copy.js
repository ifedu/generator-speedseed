module.exports = ($) => {
    'use strict'

    const copy = (src, dest) =>
        () =>
            $.gulp
            .src(src)
            .pipe($.gulp.dest(dest))

    $.gulp.task('copy-assets', copy(`${$.app.assets}/**/*`, $.build.assets))
    $.gulp.task('copy-vendor', copy(`${$.app.vendor}/**/*`, $.build.vendor))

    $.gulp.task('copy-files', copy([
        `${$.app.dir}/**/*.html`,
        `!${$.app.dir}/**/_*.html`,
        `!${$.app.dir}/**/_**/**/*.html`,

        `${$.app.dir}/**/*.json`,
        `!${$.app.dir}/**/_*.json`,
        `!${$.app.dir}/**/_**/**/*.json`
    ], $.build.dir))

    $.gulp.task('copy', (cb) => $.runSequence(['copy-assets', 'copy-files', 'copy-vendor'], cb))

    $.gulp.task('copy-template', copy(`${$.build.js}/templates.js`, $.build.tmpJs))
}