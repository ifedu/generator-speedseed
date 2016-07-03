module.exports = ($, gulp) => {
    gulp.task('jsx', () => {
        const babel = require('gulp-babel')
        const changed = require('gulp-changed')
        const gulpif = require('gulp-if')
        const modifyFile = require('gulp-modify-file')
        const plumber = require('gulp-plumber')
        const react = require('gulp-react')

        $.resetPropsHtml()

        return gulp
        .src([
            `${$.app.dir}/**/*.jsx`,
            `!${$.app.copy.vendor}/**/*`
        ])
        .pipe(gulpif($.if.notInclude, changed($.build.dir)))
        .pipe(plumber())
        .pipe(modifyFile((content, route) => $.translateTpl(content, route, '.jsx')))
        .pipe(react())
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest($.build.dir))
    })
}