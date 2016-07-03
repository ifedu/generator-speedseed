module.exports = ($, gulp) => {
    ($.yo.framework !== 'react')
        ? gulp.task('common', (cb) => $.runSequence(
            'clean',
            ['css-app', 'html-app', 'js-app'],
            ['js', 'css', 'html', 'copy'],
            cb
        ))
        : gulp.task('common', (cb) => $.runSequence(
            'clean',
            ['css-app', 'html-app', 'js-app'],
            'jsx',
            ['js', 'css', 'html', 'copy'],
            cb
        ))

    if ($.config.dist !== true) {
        gulp.task('build', (cb) => $.runSequence('common', 'webserver', 'watch', cb))
    }
    else if ($.config.server === false) {
        gulp.task('build', (cb) => $.runSequence('common', 'minified', cb))
    }
    else {
        gulp.task('build', (cb) => $.runSequence('common', 'minified', 'webserver', 'watch', cb))
    }

    gulp.task('reports', (cb) => $.runSequence('common', 'analysis', 'webserver', cb))
    gulp.task('test', (cb) => $.runSequence('common', 'js-spec', 'js-test', 'watch', cb))
}