module.exports = ($, gulp) => {
    gulp.task('common', (cb) => $.runSequence(
        'clean',
        ['css-app', 'html-app', 'js-app'],
        ['js', 'css', 'html'],
        cb
    ))

    if ($.config.dist !== true) {
        gulp.task('build', (cb) => $.runSequence('common', 'copy', 'webserver', 'watch', cb))
    }
    else if ($.config.server !== true) {
        gulp.task('build', (cb) => $.runSequence('common', 'copy', 'copy-libs', 'minified', cb))
    }
    else {
        gulp.task('build', (cb) => $.runSequence('common', 'copy', 'copy-libs', 'minified', 'webserver', 'watch', cb))
    }

    gulp.task('reports', (cb) => $.runSequence('common', 'analysis', 'webserver', cb))
    gulp.task('test', (cb) => $.runSequence('common', 'js-spec', 'js-test', 'watch', cb))
}