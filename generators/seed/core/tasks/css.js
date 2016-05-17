module.exports = ($) => {
    'use strict'

    const css = {
        less(files) {
            const less = require('gulp-less')

            return less($.config.less)
        },

        sass(files) {
            const sass = require('gulp-sass')

            return sass($.config.sass)
        },

        scss(files) {
            const scss = require('gulp-sass')

            return scss($.config.scss)
        },

        styl() {
            const styles = require('gulp-stylus')

            return styles($.config.styl)
        }
    }

    $.gulp.task('css', () => {
        return $
        .gulp
        .src([
            `${$.app.dir}/**/*.${$.yo.preprocessorCSS}`,

            `!${$.app.dir}/**/.*.${$.yo.preprocessorCSS}`,
            `!${$.app.dir}/**/.**/**/*.${$.yo.preprocessorCSS}`,

            `!${$.app.dir}/**/_*.${$.yo.preprocessorCSS}`,
            `!${$.app.dir}/**/_**/**/*.${$.yo.preprocessorCSS}`,

            `!${$.app.dir}/**/-*.${$.yo.preprocessorCSS}`,
            `!${$.app.dir}/**/-**/**/*.${$.yo.preprocessorCSS}`
        ])
        .pipe($.changed($.build.dir))
        .pipe(css[$.yo.preprocessorCSS]())
        .pipe($.gulp.dest($.build.dir))
    })

    $.gulp.task('css-app', () => {
        const rename = require('gulp-rename')

        return $
        .gulp
        .src([
            `${$.app.dir}/**/.*.${$.yo.preprocessorCSS}`
        ])
        .pipe($.changed($.app.dir, {extension: '.css'}))
        .pipe(css[$.yo.preprocessorCSS]())
        .pipe(rename((path) => path.basename = `-${path.basename}`))
        .pipe($.gulp.dest($.app.dir))
    })
}