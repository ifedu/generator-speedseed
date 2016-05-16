module.exports = ($) => {
    'use strict'

    $.gulp.task('plato', (cb) => {
        const plato = require('plato')

        const FILES = $.reports.plato.files

        const OPTIONS = {}

        $.config.port = $.reports.plato.port
        $.build.dir = $.reports.plato.dir

        plato.inspect(FILES, $.reports.plato.dir, OPTIONS, () => cb())
    })

    $.gulp.task('analysis', (cb) => $.runSequence('clean-plato', 'plato', cb))
}