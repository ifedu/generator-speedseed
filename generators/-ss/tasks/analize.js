module.exports = ($) => {
    'use strict'

    $.gulp.task('plato', (cb) => {
        const plato = require('plato')

        const FILES = [
            `${$.deploy.js}/**/*.js`
        ]

        const OPTIONS = {}

        $.config.port = 8003
        $.deploy.dir = './_analysis/plato'

        plato.inspect(FILES, $.plato, OPTIONS, () => $.runSequence('webserver'))
    })

    $.gulp.task('analysis', () => $.runSequence('clean-plato', 'plato'))
}