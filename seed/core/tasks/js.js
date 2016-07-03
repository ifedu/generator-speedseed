module.exports = ($, gulp) => {
    const ext = $.options.compiler.getExtCompiler($)

    gulp.task('js', () => {
        const changed = require('gulp-changed')
        const extend = require('extend')
        const filter = require('gulp-filter')
        const gulpif = require('gulp-if')
        const modifyFile = require('gulp-modify-file')
        const plumber = require('gulp-plumber')

        $.resetPropsHtml()

        return gulp
        .src([
            `${$.app.dir}/**/*.${ext}`,
            `!${$.app.dir}/**/*.spec.${ext}`,
            `!${$.app.copy.vendor}/**/*`
        ])
        .pipe(gulpif($.if.notInclude, changed($.build.dir)))
        .pipe(plumber())
        .pipe(filter($.filterProps(`${ext}`)))
        .pipe(modifyFile((content, route) => $.translateTpl(content, route, `.${ext}`)))
        .pipe($.options.compiler.getPluginCompiler($))
        .pipe(gulpif(
            ($.yo.framework === 'angularjs' && $.config.dist === true),
            $.options.framework.ngAnnotate($)()
        ))
        .pipe(gulp.dest($.build.dir))
    })

    gulp.task('js-spec', () => {
        const changed = require('gulp-changed')
        const extend = require('extend')
        const filter = require('gulp-filter')
        const gulpif = require('gulp-if')
        const modifyFile = require('gulp-modify-file')
        const plumber = require('gulp-plumber')

        $.resetPropsHtml()

        return gulp
        .src([
            `${$.app.dir}/**/*.spec.${ext}`
        ])
        .pipe(plumber())
        .pipe($.options.compiler.getPluginCompiler($))
        .pipe(gulp.dest($.tmp.dir))
    })

    gulp.task('js-app', () => {
        const babel = require('gulp-babel')
        const changed = require('gulp-changed')
        const gulpif = require('gulp-if')
        const plumber = require('gulp-plumber')
        const rename = require('gulp-rename')
        const uglify = require('gulp-uglify')

        return gulp
        .src([
            `${$.app.dir}/**/.*.${ext}`,
            `!${$.app.copy.vendor}/**/*`
        ])
        .pipe(plumber())
        .pipe($.options.compiler.getPluginCompiler($))
        .pipe(rename((path) => path.basename = `-${path.basename.substr(1)}`))
        .pipe(changed($.app.dir))
        .pipe(gulpif(($.yo.framework === 'polymer' && $.config.dist === true), uglify()))
        .pipe(gulp.dest($.app.dir))
    })
}