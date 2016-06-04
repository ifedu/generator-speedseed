module.exports = ($) => {
    'use strict'

    $.gulp.task('js', () => {
        const _ = require('lodash')
        const babel = require('gulp-babel')
        const data = require('gulp-data')
        const extend = require('extend')
        const gulpif = require('gulp-if')
        const modifyFile = require('gulp-modify-file')

        const filter = $.filter($.filterProps)

        let ngAnnotate = $.options.framework.ngAnnotate($)

        $.resetPropsHtml()

        return $
        .gulp
        .src([
            `${$.app.dir}/**/*.js`
        ])
        .pipe(gulpif($.if.notInclude, $.changed($.build.dir)))
        .pipe($.plumber())
        .pipe(filter)
        .pipe(modifyFile((content, path) => {
            const dataTpl = extend(true, {}, $.getJsProps(path, '.js'))

            dataTpl.__dirname = $.path.dirname(path)

            return _.template(content, $.template)(dataTpl)
        }))
        .pipe($.gulp.dest($.build.dir))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe($.gulp.dest($.build.dir))
        .pipe(gulpif(($.yo.framework === 'angularjs' && $.config.dist === true), ngAnnotate()))
        .pipe($.gulp.dest($.build.dir))
    })

    $.gulp.task('js-app', () => {
        const babel = require('gulp-babel')
        const gulpif = require('gulp-if')
        const rename = require('gulp-rename')
        const uglify = require('gulp-uglify')

        return $
        .gulp
        .src([
            `${$.app.dir}/**/.*.js`
        ])
        .pipe($.plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(rename((path) => {
            const basename = path.basename.substr(1)

            path.basename = `-${basename}`
        }))
        .pipe($.changed($.app.dir))
        .pipe(gulpif(($.yo.framework === 'polymer' && $.config.dist === true), uglify()))
        .pipe($.gulp.dest($.app.dir))
    })
}