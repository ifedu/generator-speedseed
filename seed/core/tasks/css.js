module.exports = ($, gulp) => {
    gulp.task('css', (cb) => {
        const changed = require('gulp-changed')
        const filter = require('gulp-filter')
        const gulpif = require('gulp-if')
        const modifyFile = require('gulp-modify-file')

        const css = $.options.css.getPluginCss($)

        if (css === undefined) return cb()

        return gulp
        .src([
            `${$.app.dir}/**/*.${$.yo.css}`,
            `!${$.app.copy.vendor}/**/*`
        ])
        .pipe(gulpif($.if.notInclude, changed($.build.dir, {extension: '.css'})))
        .pipe(filter($.filterProps('css')))
        .pipe(modifyFile((content, route) => $.translateTpl(content, route, `.${$.yo.css}`)))
        .pipe(css())
        .on('error', cb)
        .pipe(gulp.dest($.build.dir))
    })

    gulp.task('css-app', (cb) => {
        const changed = require('gulp-changed')
        const rename = require('gulp-rename')

        const css = $.options.css.getPluginCssMin($)

        if (css === undefined) return cb()

        return gulp
        .src([
            `${$.app.dir}/**/.*.${$.yo.css}`,
            `!${$.app.copy.vendor}/**/*`
        ])
        .pipe(changed($.app.dir, {extension: '.css'}))
        .pipe(css())
        .on('error', cb)
        .pipe(rename((path) => path.basename = path.basename.substr(1)))
        .pipe(gulp.dest($.tmp.dir))
    })
}