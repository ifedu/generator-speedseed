module.exports = ($, gulp) => {
    const copy = (ext, src, dest) =>
        () => {
            const changed = require('gulp-changed')
            const gulpif = require('gulp-if')
            const modifyFile = require('gulp-modify-file')

            return gulp
            .src(src)
            .pipe(changed(dest, ext))
            .pipe(gulpif(
                (ext.extension === '.html'),
                modifyFile((content, route) => $.translateTpl(content, route, ext.extension))
            ))
            .pipe(gulp.dest(dest))
        }

    gulp.task('copy-assets', copy({}, `${$.app.copy.assets}/**`, $.build.copy.assets))
    gulp.task('copy-vendor', copy({}, `${$.app.copy.vendor}/**`, $.build.copy.vendor))

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

    gulp.task('copy-css', copy({extension: '.css'}, [
        `${$.app.dir}/**/*.css`,

        `!${$.app.dir}/**/-*.css`,
        `!${$.app.dir}/**/-**/**/*.css`,

        `!${$.app.dir}/**/_*.css`,
        `!${$.app.dir}/**/_**/**/*.css`
    ], $.build.dir))

    gulp.task('copy-html', copy({extension: '.html'}, [
        `${$.app.dir}/**/*.html`,

        `!${$.app.dir}/**/-*.html`,
        `!${$.app.dir}/**/-**/**/*.html`,

        `!${$.app.dir}/**/_*.html`,
        `!${$.app.dir}/**/_**/**/*.html`
    ], $.build.dir))

    gulp.task('copy-json', copy({extension: '.json'}, [
        `${$.app.dir}/**/*.json`,

        `!${$.app.dir}/**/-*.json`,
        `!${$.app.dir}/**/-**/**/*.json`,

        `!${$.app.dir}/**/_*.json`,
        `!${$.app.dir}/**/_**/**/*.json`
    ], $.build.dir))

    gulp.task('copy', (cb) => $.runSequence(['copy-assets', 'copy-css', 'copy-html', 'copy-json', 'copy-node_modules', 'copy-vendor'], cb))
}