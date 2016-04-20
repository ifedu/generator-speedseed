module.exports = ($) => {
    'use strict'

    $.gulp.task('styles', () => {
        const styles = require('gulp-stylus')

        return $
        .gulp
        .src([
            `${$.dev.dir}/**/*.styl`,
            `!${$.dev.dir}/**/_*.styl`,
            `!${$.dev.dir}/**/_**/**/*.styl`
        ])
        .pipe(styles({
            linenos: true
        }))
        .pipe($.gulp.dest($.deploy.dir))
        .on('error', (error) => console.log(error))
    })
}