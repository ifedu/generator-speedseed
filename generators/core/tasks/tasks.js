module.exports = ($) => {
    'use strict'

    $.gulp.task('build', (cb) => $.runSequence('clean',
        ['css-dev', 'html-dev', 'js-dev'],
        'jsx',
        ['js', 'css', 'html', 'copy'],
        ['clean-dev', 'template-cache'],
        cb
    ))

    $.gulp.task('check', (cb) => $.runSequence('build', 'analysis', cb))
    $.gulp.task('deploy', (cb) => $.runSequence('build', 'minified', 'webserver', 'watch', cb))
    $.gulp.task('test', (cb) => $.runSequence('build', 'js-test', 'karma', 'watch', cb))
}