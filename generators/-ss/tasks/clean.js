module.exports = ($) => {
    'use strict'

    const deleteFiles = (files, cb) => {
        const del = require('del')

        return del(files, {
            force: true
        }, cb)
    }

    $.gulp.task('clean', (cb) => deleteFiles($.deploy.dir, cb))

    $.gulp.task('clean-dev', (cb) =>
        deleteFiles([
            `${$.dev.dir}/**/---*.css`,
            `${$.dev.dir}/**/---*.html`,
            `${$.dev.dir}/**/---*.es5.js`,
            `!${$.dev.dir}/**/_**/**/*`
        ], cb)
    )

    $.gulp.task('clean-min', (cb) =>
        deleteFiles([
            $.deploy.vendor,
            `${$.deploy.js}/**/*.js`,
            `${$.deploy.dir}/**/_*`,
            `${$.deploy.dir}/**/_**/**/*`,
            `!${$.deploy.js}/all.js`
        ], cb)
    )

    $.gulp.task('clean-plato', (cb) => deleteFiles($.plato, cb))
}