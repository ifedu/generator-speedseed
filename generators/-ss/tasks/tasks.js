module.exports = ($) => {
    $.gulp.task('build', (cb) => $.runSequence('clean', 'js', ['css', 'html', 'copy'], 'templateCache', cb))
    // $.gulp.task('compiledMin', (cb) => $.runSequence('scripts', ['styles-dist', 'jade-dist', 'copy'], 'copyDeploy', 'templateCache-dist', 'distTask', cb))

    // $.gulp.task('analize', (cb) => $.runSequence('compiledBase', 'analysis', cb))
    $.gulp.task('run', (cb) => $.runSequence('build', 'webserver', 'watch', cb))
    $.gulp.task('test', (cb) => $.runSequence('build', 'js-test', 'karma', 'watch', cb))

    $.gulp.task('dist', (cb) => {
        $.config.html.pretty = false

        return $.runSequence('run', cb)

        // $.runSequence('compiledMin', 'webserver-dist', cb)
    })
}