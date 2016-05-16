module.exports = ($) => {
    'use strict'

    $.gulp.task('common', (cb) => $.runSequence(
        ['clean', 'clean-app'],
        ['css-app', 'html-app', 'js-app'],
        'jsx',
        ['js', 'css', 'html', 'copy'],
        cb
    ))

    $.gulp.task('build', (cb) => $.runSequence('common', 'minified', 'webserver', 'clean-app', 'watch', cb))
    $.gulp.task('reports', (cb) => $.runSequence('common', 'analysis', 'webserver', 'clean-app', cb))
    $.gulp.task('test', (cb) => $.runSequence('common', 'js-test', 'clean-app', 'watch', cb))
}