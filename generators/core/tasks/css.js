module.exports = ($) => {
    'use strict'

    $.gulp.task('css', () => {
        const styles = require('gulp-stylus')

        return $
        .gulp
        .src([
            `${$.dev.dir}/**/*.styl`,
            `!${$.dev.dir}/**/---*.styl`,
            `!${$.dev.dir}/**/_*.styl`,
            `!${$.dev.dir}/**/_**/**/*.styl`
        ])
        .pipe(styles($.config.css))
        .pipe($.gulp.dest($.deploy.dir))
        .on('error', (error) => console.log(error))
    })

    $.gulp.task('css-dev', () => {
        const styles = require('gulp-stylus')

        return $
        .gulp
        .src([
            `${$.dev.dir}/**/---*.styl`
        ])
        .pipe(styles($.config.css))
        .pipe($.gulp.dest($.dev.dir))
        .on('error', (error) => console.log(error))
    })
}