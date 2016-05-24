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
        const gulpif = require('gulp-if')

        const filter = $.filter([
            `**/*`,

            `!**/.*.${$.yo.css}`,
            `!**/.**/**/*.${$.yo.css}`,

            `!**/_*.${$.yo.css}`,
            `!**/_**/**/*.${$.yo.css}`
        ])

        return $
        .gulp
        .src([
            `${$.app.dir}/**/*.${$.yo.css}`,
        ])
        .pipe(gulpif($.if.notInclude, $.changed($.build.dir, {extension: '.css'})))
        .pipe($.plumber())
        .pipe(filter)
        .pipe(css[$.yo.css]())
        .pipe($.gulp.dest($.build.dir))
    })

    $.gulp.task('css-app', () => {
        const rename = require('gulp-rename')

        return $
        .gulp
        .src([
            `${$.app.dir}/**/.*.${$.yo.css}`
        ])
        .pipe($.changed($.app.dir, {extension: '.css'}))
        .pipe($.plumber())
        .pipe(css[$.yo.css]())
        .pipe(rename((path) => path.basename = `-${path.basename}`))
        .pipe($.gulp.dest($.app.dir))
    })
}