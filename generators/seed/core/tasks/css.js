module.exports = ($) => {
    'use strict'

    const css = {
        less: () => require('gulp-less')($.config.less),
        sass: () => require('gulp-sass')($.config.sass),
        scss: () => require('gulp-sass')($.config.scss),
        styl: () => require('gulp-styl')($.config.styl)
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
        .pipe(rename((path) => {
            const basename = path.basename.substr(1)

            path.basename = `-${basename}`
        }))
        .pipe($.gulp.dest($.app.dir))
    })
}