module.exports = ($) => {
    'use strict'

    $.gulp.task('js', () => {
        const babel = require('gulp-babel')
        const ngAnnotate = require('gulp-ng-annotate')
        
        return $
        .gulp
        .src([
            `${$.dev.dir}/**/*.js`,
            `!${$.dev.dir}/**/_*.js`,
            `!${$.dev.dir}/**/_**/**/*.js`
        ])
        .pipe($.changed($.deploy.dir))
        .pipe(babel())
        .pipe($.gulp.dest($.deploy.dir))
        .pipe(ngAnnotate())
        .pipe($.gulp.dest($.deploy.dir))
    })
}