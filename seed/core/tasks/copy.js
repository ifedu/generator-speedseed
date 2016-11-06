module.exports = ($, gulp) => {
    const copy = (ext, src, dest) =>
        () => {
            const changed = require('gulp-changed')
            const gulpif = require('gulp-if')
            const modifyFile = require('gulp-modify-file')

            return gulp
            .src(src)
            .pipe(modifyFile((content, route) => $.translateTpl(content, route, ext.extension)))
            .pipe(gulp.dest(dest))
        }

    const dependencies = require('../../package.json').dependencies
    const nodeModules = []

    for (let dependencie in dependencies) {
        nodeModules.push(`node_modules-${dependencie}`)

        gulp.task(`node_modules-${dependencie}`, (cb) =>
            copy({}, `node_modules/${dependencie}/**/*`, `${$.build.copy.vendor}/${dependencie}`)()
        )
    }

    gulp.task('copy-node_modules', (cb) => {
        if (nodeModules.length === 0) return cb()

        $.runSequence(nodeModules, cb)
    })

    gulp.task('copy', copy({}, [
        `${$.app.dir}/**/*.css`,
        `${$.app.dir}/**/*.html`,
        `${$.app.dir}/**/*.json`,

        `!${$.app.dir}/**/-*.css`,
        `!${$.app.dir}/**/-**/**/*.css`,

        `!${$.app.dir}/**/-*.html`,
        `!${$.app.dir}/**/-**/**/*.html`,

        `!${$.app.dir}/**/-*.json`,
        `!${$.app.dir}/**/-**/**/*.json`
    ], $.build.dir))

    gulp.task('copy-app', copy({}, [
        `${$.app.dir}/**/.*.css`,
        `${$.app.dir}/**/.*.html`
    ], $.tmp.dir))

    gulp.task('copy-assets', () =>
        gulp
        .src(`${$.app.copy.assets}/**`)
        .pipe(gulp.dest($.build.copy.assets))
    )

    gulp.task('copy-vendor', copy({}, `${$.app.copy.vendor}/**`, $.build.copy.vendor))

    gulp.task('copy-libs', (cb) => $.runSequence(['copy-assets', 'copy-node_modules'], cb))
}