module.exports = ($) => {
    'use strict'

    $.gulp.task('jsx', () => {
        const babel = require('gulp-babel')
        const data = require('gulp-data')
        const react = require('gulp-react')
        const template = require('gulp-template')

        $.resetPropsHtml()

        return $
        .gulp
        .src([
            `${$.app.dir}/**/*.jsx`,

            `!${$.app.dir}/**/.*.jsx`,
            `!${$.app.dir}/**/.**/**/*.jsx`,

            `!${$.app.dir}/**/_*.jsx`,
            `!${$.app.dir}/**/_**/**/*.jsx`,

            `!${$.app.dir}/**/-*.jsx`,
            `!${$.app.dir}/**/-**/**/*.jsx`
        ])
        .pipe(data((file) => {
            const app = $.app.dir.replace('./', '')
            const build = $.build.dir.replace('./', '')

            const dir = $.path
                .dirname(file.path)
                .replace(app, build)
                .replace('.jsx', '.js')

            return $
            .gulp
            .src(file.path)
            .pipe($.changed(dir))
            .pipe(template($.getJsProps(file, '.jsx'), { 'interpolate': /<%=([\s\S]+?)%>/g }))
            .pipe($.gulp.dest(dir))
            .pipe(react())
            .pipe($.gulp.dest(dir))
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe($.gulp.dest(dir))
        }))
    })
}