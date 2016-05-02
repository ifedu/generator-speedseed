module.exports = ($) => {
    'use strict'

    const deleteFiles = (files, cb) => {
        const del = require('del')

        return del(files, {
            force: true
        }, cb)
    }

    $.gulp.task('clean', (cb) => {
        deleteFiles($.deploy.dir, cb)
    })

    $.gulp.task('clean-plato', (cb) =>  {
        deleteFiles($.plato, cb)
    })

    $.gulp.task('clean-min', (cb) => {
        deleteFiles([
            $.deploy.vendor,
            `${$.deploy.js}/**/*.js`,
            `${$.deploy.dir}/**/_*`,
            `${$.deploy.dir}/**/_**/**/*`,
            `!${$.deploy.js}/all.js`
        ], cb)
    })
}