module.exports = ($) => {
    'use strict'

    $.gulp.task('build', (cb) => $.runSequence('clean', ['js', 'css', 'html', 'copy'], 'templateCache', cb))
    $.gulp.task('deploy', (cb) => $.runSequence('build', 'minified', 'webserver', 'watch', cb))

    // $.gulp.task('analize', (cb) => $.runSequence('compiledBase', 'analysis', cb))
    // $.gulp.task('test', (cb) => $.runSequence('build', 'js-test', 'karma', 'watch', cb))
}