module.exports = ($) => {
    'use strict'

    $.gulp.task('js', () => {
        const babel = require('gulp-babel')
        const data = require('gulp-data')
        const gulpif = require('gulp-if')
        const ngAnnotate = require('gulp-ng-annotate')
        const react = require('gulp-react')
        const template = require('gulp-template')

        $.resetPropsHtml()

        return $
        .gulp
        .src([
            `${$.app.dir}/**/*.js`
        ])
        .pipe(data((file) => {
            const app = $.app.dir.replace('./', '')
            const build = $.build.dir.replace('./', '')

            const dir = $.path
                .dirname(file.path)
                .replace(app, build)

            const filter = $.filter([
                `**/*`,
                `!**/*.spec.js`,

                `!**/.*.js`,
                `!**/.**/**/*.js`,

                `!**/_*.js`,
                `!**/_**/**/*.js`,

                `!**/-*.js`,
                `!**/-**/**/*.js`
            ])

            let src = $.path.resolve(__dirname, $.path.dirname(file.path))
            src = $.path.normalize(`${src}/**/${$.path.basename(file.path)}`)

            return $
            .gulp
            .src(src)
            .pipe(gulpif($.if.notInclude, $.changed(dir)))
            .pipe($.plumber())
            .pipe(filter)
            .pipe(template($.getJsProps(file, '.js'), {
                'evaluate': /{%=([\s\S]+?)%}/g,
                'interpolate': /{%=([\s\S]+?)%}/g
            }))
            .pipe($.gulp.dest(dir))
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe($.gulp.dest(dir))
            .pipe(gulpif(($.yo.framework === 'angularjs' && $.config.dist === true), ngAnnotate()))
            .pipe($.gulp.dest(dir))
        }))
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
        .pipe(rename((path) => path.basename = `-${path.basename}`))
        .pipe($.changed($.app.dir))
        .pipe(gulpif(($.yo.framework === 'polymer' && $.config.dist === true), uglify()))
        .pipe($.gulp.dest($.app.dir))
    })
}