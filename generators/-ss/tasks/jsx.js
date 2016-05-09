module.exports = ($) => {
    'use strict'

    $.gulp.task('jsx', () => {
        const babel = require('gulp-babel')
        const data = require('gulp-data')
        const react = require('gulp-react')
        const template = require('gulp-template')
        console.log('B')
        return $
        .gulp
        .src([
            `${$.dev.dir}/**/*.jsx`,
            `!${$.dev.dir}/**/_*.jsx`,
            `!${$.dev.dir}/**/_**/**/*.jsx`
        ])
        .pipe(data((file) => {
            const deploy = $.deploy.dir.replace('./', '')
            const dev = $.dev.dir.replace('./', '')

            const dir = $.path
                .dirname(file.path)
                .replace(dev, deploy)
                .replace('.jsx', '.js')

            return $
            .gulp
            .src(file.path)
            .pipe($.changed(dir))
            .pipe(template($.getJsOfHtml(file, '.jsx')))
            .pipe($.gulp.dest(dir))
            .pipe(react())
            .pipe($.gulp.dest(dir))
            .pipe(babel())
            .pipe($.gulp.dest(dir))
        }))
    })
}