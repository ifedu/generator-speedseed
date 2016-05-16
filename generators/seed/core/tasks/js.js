module.exports = ($) => {
    'use strict'

    $.gulp.task('js', () => {
        const babel = require('gulp-babel')
        const data = require('gulp-data')
        const ngAnnotate = require('gulp-ng-annotate')
        const react = require('gulp-react')
        const template = require('gulp-template')

        $.resetPropsHtml()

        return $
        .gulp
        .src([
            `${$.app.dir}/**/*.js`,
            `!${$.app.dir}/**/*.spec.js`,

            `!${$.app.dir}/**/.*.js`,
            `!${$.app.dir}/**/.**/**/*.js`,

            `!${$.app.dir}/**/_*.js`,
            `!${$.app.dir}/**/_**/**/*.js`,

            `!${$.app.dir}/**/-*.js`,
            `!${$.app.dir}/**/-**/**/*.js`
        ])
        .pipe(data((file) => {
            const app = $.app.dir.replace('./', '')
            const build = $.build.dir.replace('./', '')

            const dir = $.path
                .dirname(file.path)
                .replace(app, build)

            return $
            .gulp
            .src(file.path)
            .pipe($.changed(dir))
            .pipe(template($.getJsProps(file, '.js'), { 'interpolate': /<%=([\s\S]+?)%>/g }))
            .pipe($.gulp.dest(dir))
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe($.gulp.dest(dir))
            .pipe(ngAnnotate())
            .pipe($.gulp.dest(dir))
        }))
    })

    $.gulp.task('js-app', () => {
        const babel = require('gulp-babel')
        const ngAnnotate = require('gulp-ng-annotate')
        const rename = require('gulp-rename')

        return $
        .gulp
        .src([
            `${$.app.dir}/**/.*.js`,
            `${$.app.dir}/**/.*.spec.js`,

            `!${$.app.dir}/**/_*.js`,
            `!${$.app.dir}/**/_**/**/*.js`
        ])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(rename((path) => path.basename = `-${path.basename}`))
        .pipe($.changed($.app.dir))
        .pipe($.gulp.dest($.app.dir))
    })
}