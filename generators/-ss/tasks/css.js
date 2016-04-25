module.exports = ($) => {
    'use strict'

    $.gulp.task('css', () => {
        const styles = require('gulp-stylus')

        const configCss = ($.config.css.min === false) ? {compress: true} : {linenos: true}

        return $
        .gulp
        .src([
            `${$.dev.dir}/**/*.styl`,
            `!${$.dev.dir}/**/_*.styl`,
            `!${$.dev.dir}/**/_**/**/*.styl`
        ])
        .pipe(styles(configCss))
        .pipe($.gulp.dest($.deploy.dir))
        .on('error', (error) => console.log(error))
    })
}