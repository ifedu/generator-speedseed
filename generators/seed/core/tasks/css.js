module.exports = ($) => {
    'use strict'

    $.gulp.task('css', () => {
        const styles = require('gulp-stylus')

        return $
        .gulp
        .src([
            `${$.app.dir}/**/*.styl`,

            `!${$.app.dir}/**/.*.styl`,
            `!${$.app.dir}/**/.**/**/*.styl`,

            `!${$.app.dir}/**/_*.styl`,
            `!${$.app.dir}/**/_**/**/*.styl`,

            `!${$.app.dir}/**/-*.styl`,
            `!${$.app.dir}/**/-**/**/*.styl`
        ])
        .pipe($.changed($.build.dir))
        .pipe(styles($.config.css))
        .pipe($.gulp.dest($.build.dir))
    })

    $.gulp.task('css-app', () => {
        const rename = require('gulp-rename')
        const styles = require('gulp-stylus')

        return $
        .gulp
        .src([
            `${$.app.dir}/**/.*.styl`
        ])
        .pipe($.changed($.app.dir, {extension: '.css'}))
        .pipe(styles($.config.css))
        .pipe(rename((path) => path.basename = `-${path.basename}`))
        .pipe($.gulp.dest($.app.dir))
    })
}