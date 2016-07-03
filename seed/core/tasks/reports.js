module.exports = ($, gulp) => {
    gulp.task('plato', (cb) => {
        const plato = require('plato')

        $.build.dir = $.reports.plato.dir
        $.config.port = $.reports.plato.port

        plato.inspect($.reports.plato.files, $.reports.plato.dir, {}, () => cb())
    })

    gulp.task('analysis', (cb) => $.runSequence('clean-plato', 'plato', cb))
}