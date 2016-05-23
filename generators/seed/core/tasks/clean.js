module.exports = ($) => {
    'use strict'

    const deleteFiles = (files, cb) => {
        const del = require('del')

        return del(files, {
            force: true
        }, cb)
    }

    $.gulp.task('clean', (cb) => deleteFiles($.build.dir, cb))

    $.gulp.task('clean-app', (cb) => {
        $.if.notInclude = true

        $.reload && $.reload()

        return deleteFiles([
            `${$.app.dir}/**/-*`,
            `${$.app.dir}/**/-**/*`,
            `!${$.app.dir}/**/_**/**/*`
        ], cb)
    })

    $.gulp.task('clean-dist', (cb) =>
        deleteFiles([
            $.build.vendor,
            `${$.build.js}/**/*.js`,
            `${$.build.dir}/**/_*`,
            `${$.build.dir}/**/_**/**/*`,
            `!${$.build.jsAll}`
        ], cb)
    )

    $.gulp.task('clean-dirs', (cb) =>
        deleteFiles([
            $.build.dir,
            $.dist.dir,
            $.reports.dir
        ], cb)
    )

    $.gulp.task('clean-plato', (cb) => deleteFiles($.reports.plato.dir, cb))
}