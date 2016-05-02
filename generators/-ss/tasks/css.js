module.exports = ($) => {
    'use strict'

    $.gulp.task('css', () => {
        const styles = require('gulp-stylus')

        return $
        .gulp
        .src([
            `${$.dev.css}/**/*.styl`,
            `!${$.dev.css}/**/_*.styl`,
            `!${$.dev.css}/**/_**/**/*.styl`
        ])
        .pipe(styles($.config.css))
        .pipe($.gulp.dest($.deploy.css))
        .on('error', (error) => console.log(error))
    })
}