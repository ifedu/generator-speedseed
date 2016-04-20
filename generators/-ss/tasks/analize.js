module.exports = ($) => {
    // 'use strict'

    $.gulp.task('clean-plato', (cb) => {
    //     $.del([
    //         $.plato
    //     ], {
    //         force: true
    //     }, cb)
    })

    $.gulp.task('plato', () => {
    //     const plato = require('plato')

    //     const FILES = [
    //         `${$.deploy.js}/**/*.js`,
    //         `${$.deploy.views}/**/*.js`
    //     ]

    //     const OPTIONS = {}

    //     plato.inspect(FILES, $.plato, OPTIONS, () => $.runSequence('webserver-analize'))
    })

    // $.gulp.task('webserver-analize', () => require(`../${$.server}/server-analize.js`)($))

    $.gulp.task('analysis', () => $.runSequence('clean-plato', 'plato'))
}