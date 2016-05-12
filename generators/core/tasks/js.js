module.exports = ($) => {
    'use strict'

    $.gulp.task('js', () => {
        const babel = require('gulp-babel')
        const ngAnnotate = require('gulp-ng-annotate')

        return $
        .gulp
        .src([
            `${$.dev.dir}/**/*.js`,
            `!${$.dev.dir}/**/---*.js`,
            `!${$.dev.dir}/**/*.test.js`,
            `!${$.dev.dir}/**/_*.js`,
            `!${$.dev.dir}/**/_**/**/*.js`
        ])
        .pipe($.changed($.deploy.dir))
        .pipe(babel())
        .pipe($.gulp.dest($.deploy.dir))
        .pipe(ngAnnotate())
        .pipe($.gulp.dest($.deploy.dir))
    })

    $.gulp.task('js-dev', () => {
        const babel = require('gulp-babel')
        const ngAnnotate = require('gulp-ng-annotate')
        const rename = require('gulp-rename')

        return $
        .gulp
        .src([
            `${$.dev.dir}/**/---*.js`,
            `${$.dev.dir}/**/*.test.js`
        ])
        .pipe(rename((path) => path.basename += '.es5'))
        .pipe($.changed($.deploy.dir))
        .pipe(babel())
        .pipe($.gulp.dest($.dev.dir))
        .pipe(ngAnnotate())
        .pipe($.gulp.dest($.dev.dir))
    })
}