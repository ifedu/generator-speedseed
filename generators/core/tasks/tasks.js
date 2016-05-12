module.exports = ($) => {
    'use strict'

    $.gulp.task('build', (cb) => $.runSequence('clean',
        ['css-dev', 'html-dev', 'js-dev'],
        'jsx',
        ['js', 'css', 'html', 'copy'],
        'template-cache',
        cb
    ))

    $.gulp.task('check', (cb) => $.runSequence('build', 'analysis', 'clean-dev', cb))
    $.gulp.task('deploy', (cb) => $.runSequence('build', 'minified', 'clean-dev', 'webserver', 'watch', cb))
    $.gulp.task('test', (cb) => $.runSequence('build', 'js-test', 'clean-dev', 'watch', cb))
}