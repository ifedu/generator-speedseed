module.exports = ($, gulp) => {
    'use strict'

    const deleteFiles = (files, cb) =>
        require('del')(files, {
            force: true
        }, cb)

    gulp.task('clean', (cb) => deleteFiles($.build.dir, cb))

    gulp.task('clean-app', (cb) =>
        deleteFiles([
            `${$.app.dir}/**/-*`,
            `${$.app.dir}/**/-**/*`,
            `!${$.app.dir}/**/_**/**/*`
        ], cb)
    )

    gulp.task('clean-dist', (cb) =>
        deleteFiles([
            $.build.copy.vendor,
            `${$.build.dir}/**/*.js`,
            `${$.build.dir}/**/_*`,
            `${$.build.dir}/**/_**/**/*`,
            `!${$.build.jsAll}`
        ], cb)
    )

    gulp.task('clean-dirs', (cb) =>
        deleteFiles([
            $.build.dir,
            $.dist.dir,
            $.reports.dir,
            './node_modules'
        ], cb)
    )

    gulp.task('clean-plato', (cb) => deleteFiles($.reports.plato.dir, cb))
}