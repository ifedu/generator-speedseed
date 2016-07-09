module.exports = ($, gulp) => {
    gulp.task('css', (cb) => {
        const changed = require('gulp-changed')
        const filter = require('gulp-filter')
        const gulpif = require('gulp-if')
        const modifyFile = require('gulp-modify-file')

        return gulp
        .src([
            `${$.app.dir}/**/*.${$.yo.css}`,
            `!${$.app.copy.vendor}/**/*`
        ])
        .pipe(gulpif($.if.notInclude, changed($.build.dir, {extension: '.css'})))
        .pipe(filter($.filterProps('css')))
        .pipe(modifyFile((content, route) => $.translateTpl(content, route, `.${$.yo.css}`)))
        .pipe($.options.css.getPluginCss($))
        .on('error', cb)
        .pipe(gulp.dest($.build.dir))
    })

    gulp.task('css-app', (cb) => {
        const changed = require('gulp-changed')
        const rename = require('gulp-rename')

        return gulp
        .src([
            `${$.app.dir}/**/.*.${$.yo.css}`,
            `!${$.app.copy.vendor}/**/*`
        ])
        .pipe(changed($.app.dir, {extension: '.css'}))
        .pipe($.options.css.getPluginCssMin($))
        .on('error', cb)
        .pipe(rename((path) => path.basename = path.basename.substr(1)))
        .pipe(gulp.dest($.tmp.dir))
    })
}