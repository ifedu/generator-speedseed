module.exports = ($) => {
    'use strict'

    $.gulp.task('html', () => {
        const data = require('gulp-data')
        const jade = require('gulp-jade')

        $.resetPropsHtml()

        return $
        .gulp
        .src([
            `${$.dev.dir}/**/*.jade`,
            `!${$.dev.dir}/**/---*.jade`,
            `!${$.dev.dir}/**/_*.jade`,
            `!${$.dev.dir}/**/_**/**/*.jade`
        ])
        .pipe($.changed($.deploy.dir, {extension: '.html'}))
        .pipe(data((file) => $.getJsOfHtml(file, '.jade')))
        .pipe(jade($.config.html))
        .on('error', (error) => console.log(error))
        .pipe($.gulp.dest($.deploy.dir))
    })

    $.gulp.task('html-dev', () => {
        const data = require('gulp-data')
        const jade = require('gulp-jade')

        $.resetPropsHtml()

        return $
        .gulp
        .src([
            `${$.dev.dir}/**/---*.jade`
        ])
        .pipe($.changed($.deploy.dir, {extension: '.html'}))
        .pipe(data((file) => $.getJsOfHtml(file, '.jade')))
        .pipe(jade($.config.html))
        .on('error', (error) => console.log(error))
        .pipe($.gulp.dest($.dev.dir))
    })

    $.gulp.task('html-js', () => {
        const babel = require('gulp-babel')
        const data = require('gulp-data')
        const jade = require('gulp-jade')

        $.resetPropsHtml()

        return $
        .gulp
        .src([`${$.dev.dir}/**/_*.js`])
        .pipe($.changed($.deploy.dir))
        .pipe(babel())
        .pipe($.gulp.dest($.deploy.dir))
        .pipe(data((fileJs) => {
            const deploy = $.deploy.dir.replace('./', '')
            const dev = $.dev.dir.replace('./', '')

            const FILE_JADE = fileJs.path
                .replace(deploy, dir)
                .replace(`${$.path.sep}_`, $.path.sep)
                .replace('.js', '.jade')

            let dirJade = fileJs.path.split($.path.sep)
            dirJade.pop()
            dirJade = dirJade.join($.path.sep)

            $.gulp
            .src(FILE_JADE)
            .pipe(data((file) => $.getJsOfHtml(file)))
            .pipe(jade({
                pretty: true
            }))
            .on('error', (error) => console.log(error))
            .pipe($.gulp.dest(dirJade))
        }))
    })
}