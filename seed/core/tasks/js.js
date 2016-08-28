module.exports = ($, gulp) => {
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
            `${$.app.dir}/**/*.${$.yo.tpl['js-extra']}`,
            `!${$.app.dir}/**/*.spec.${$.yo.tpl['js-extra']}`,
            `!${$.app.copy.vendor}/**/*`
        ])
        .pipe(gulpif($.if.notInclude, changed($.build.dir)))
        .pipe(plumber())
        .pipe(filter($.filterProps(`${$.yo.tpl['js-extra']}`)))
        .pipe(modifyFile((content, route) => $.translateTpl(content, route, `.${$.yo.tpl['js-extra']}`)))
        .pipe($.options.js.getPluginCompiler($))
        .pipe(gulpif(
            ($.yo.tpl.framework === 'angularjs' && $.config.dist === true),
            require('gulp-ng-annotate')()
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
            `${$.app.dir}/**/*.spec.${$.yo.tpl['js-extra']}`
        ])
        .pipe(plumber())
        .pipe($.options.js.getPluginCompiler($))
        .pipe(gulp.dest($.tmp.dir))
    })

    gulp.task('js-app', () => {
        const changed = require('gulp-changed')
        const gulpif = require('gulp-if')
        const plumber = require('gulp-plumber')
        const rename = require('gulp-rename')
        const uglify = require('gulp-uglify')

        return gulp
        .src([
            `${$.app.dir}/**/.*.${$.yo.tpl['js-extra']}`,
            `!${$.app.copy.vendor}/**/*`
        ])
        .pipe(plumber())
        .pipe($.options.js.getPluginCompiler($))
        .pipe(rename((path) => path.basename = `-${path.basename.substr(1)}`))
        .pipe(changed($.app.dir))
        .pipe(gulpif(($.yo.tpl.framework === 'polymer' && $.config.dist === true), uglify()))
        .pipe(gulp.dest($.app.dir))
    })
}