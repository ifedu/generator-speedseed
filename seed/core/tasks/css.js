module.exports = ($, gulp) => {
    gulp.task('css', (cb) => {
        const changed = require('gulp-changed')
        const filter = require('gulp-filter')
        const gulpif = require('gulp-if')
        const modifyFile = require('gulp-modify-file')
        const plumber = require('gulp-plumber')

        return gulp
        .src([
            `${$.app.dir}/**/*.${$.yo.css}`,
            `!${$.app.copy.vendor}/**/*`
        ])
        .pipe(gulpif($.if.notInclude, changed($.build.dir, {extension: '.css'})))
        .pipe(plumber())
        .pipe(filter($.filterProps('css')))
        .pipe(modifyFile((content, route) => $.translateTpl(content, route, `.${$.yo.css}`)))
        .pipe($.options.css.getPluginCss($))
        .pipe(gulp.dest($.build.dir))
        .on('end', cb)
    })

    gulp.task('css-app', (cb) => {
        const changed = require('gulp-changed')
        const plumber = require('gulp-plumber')
        const rename = require('gulp-rename')

        return gulp
        .src([
            `${$.app.dir}/**/.*.${$.yo.css}`,
            `!${$.app.copy.vendor}/**/*`
        ])
        .pipe(changed($.app.dir, {extension: '.css'}))
        .pipe(plumber())
        .pipe($.options.css.getPluginCss($))
        .pipe(rename((path) => path.basename = `-${path.basename.substr(1)}`))
        .pipe(gulp.dest($.app.dir))
        .on('end', cb)
    })
}