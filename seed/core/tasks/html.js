module.exports = ($, gulp) => {
    gulp.task('html', (cb) => {
        const changed = require('gulp-changed')
        const data = require('gulp-data')
        const filter = require('gulp-filter')
        const gulpif = require('gulp-if')
        const modifyFile = require('gulp-modify-file')
        const plumber = require('gulp-plumber')

        const html = $.options.html.getPluginHtml($)

        if (html === undefined) return cb()

        $.resetPropsHtml()

        return gulp
        .src([
            `${$.app.dir}/**/*.jade`,
            `!${$.app.copy.vendor}/**/*`
        ])
        // .pipe(gulpif($.if.notInclude, changed($.build.dir, { extension: '.html' })))
        .pipe(plumber())
        .pipe(filter($.filterProps('jade')))
        .pipe(data((file) => $.getJsProps(file, '.jade')))
        .pipe(modifyFile((content, route) => $.translateTpl(content, route, '.jade')))
        .pipe(html())
        .pipe(gulp.dest($.build.dir))
    })

    gulp.task('html-app', (cb) => {
        const changed = require('gulp-changed')
        const data = require('gulp-data')
        const plumber = require('gulp-plumber')
        const rename = require('gulp-rename')

        const html = $.options.html.getPluginHtml($)

        if (html === undefined) return cb()

        $.resetPropsHtml()

        return gulp
        .src([
            `${$.app.dir}/**/.*.jade`,
            `!${$.app.copy.vendor}/**/*`
        ])
        // .pipe(changed($.app.dir, { extension: '.html' }))
        .pipe(plumber())
        .pipe(data((file) => $.getJsProps(file, '.jade')))
        .pipe(html())
        .pipe(rename((path) => path.basename = path.basename.substr(1)))
        .pipe(gulp.dest($.tmp.dir))
    })
}