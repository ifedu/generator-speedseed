module.exports = ($) => {
    'use strict'

    $.gulp.task('html', () => {
        const data = require('gulp-data')
        const jade = require('gulp-jade')

        $.resetPropsHtml()

        return $
        .gulp
        .src([
            `${$.app.dir}/**/*.jade`,

            `!${$.app.dir}/**/.*.jade`,
            `!${$.app.dir}/**/.**/**/*.jade`,

            `!${$.app.dir}/**/_*.jade`,
            `!${$.app.dir}/**/_**/**/*.jade`,

            `!${$.app.dir}/**/-*.jade`,
            `!${$.app.dir}/**/-**/**/*.jade`
        ])
        .pipe($.changed($.build.dir, {extension: '.html'}))
        .pipe(data((file) => $.getJsProps(file, '.jade')))
        .pipe(jade({
            pretty: true
        }))
        .pipe($.gulp.dest($.build.dir))
    })

    $.gulp.task('html-app', () => {
        const data = require('gulp-data')
        const jade = require('gulp-jade')
        const rename = require('gulp-rename')

        $.resetPropsHtml()

        return $
        .gulp
        .src([
            `${$.app.dir}/**/.*.jade`
        ])
        .pipe($.changed($.app.dir, {extension: '.html'}))
        .pipe(data((file) => $.getJsProps(file, '.jade')))
        .pipe(jade($.config.html))
        .pipe(rename((path) => path.basename = `-${path.basename}`))
        .pipe($.gulp.dest($.app.dir))
    })

    $.gulp.task('html-js', () => {
        const babel = require('gulp-babel')
        const data = require('gulp-data')
        const jade = require('gulp-jade')

        $.resetPropsHtml()

        return $
        .gulp
        .src([`${$.app.dir}/**/_*.js`])
        .pipe($.changed($.build.dir))
        .pipe(babel())
        .pipe($.gulp.dest($.build.dir))
        .pipe(data((fileJs) => {
            const app = $.app.dir.replace('./', '')
            const build = $.build.dir.replace('./', '')

            const FILE_JADE = fileJs.path
                .replace(build, dir)
                .replace(`${$.path.sep}_`, $.path.sep)
                .replace('.js', '.jade')

            let dirJade = fileJs.path.split($.path.sep)
            dirJade.pop()
            dirJade = dirJade.join($.path.sep)

            $.gulp
            .src(FILE_JADE)
            .pipe(data((file) => $.getJsProps(file, '.js')))
            .pipe(jade({
                pretty: true
            }))
            .pipe($.gulp.dest(dirJade))
        }))
    })
}