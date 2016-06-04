module.exports = ($) => {
    'use strict'

    if ($.config.framework !== 'react') {
        $.gulp.task('common', (cb) => $.runSequence(
            ['clean', 'clean-app'],
            ['css-app', 'html-app', 'js-app'],
            ['js', 'css', 'html', 'copy'],
            cb
        ))
    } else {
        $.gulp.task('common', (cb) => $.runSequence(
            ['clean', 'clean-app'],
            ['css-app', 'html-app', 'js-app'],
            'jsx',
            ['js', 'css', 'html', 'copy'],
            cb
        ))
    }

    if ($.config.dist !== true) {
        $.gulp.task('build', (cb) => $.runSequence('common', 'webserver', 'clean-app', 'watch', cb))
    }
    else if ($.config.server === false) {
        $.gulp.task('build', (cb) => $.runSequence('common', 'minified', 'clean-app', cb))
    }
    else {
        $.gulp.task('build', (cb) => $.runSequence('common', 'minified', 'webserver', 'clean-app', 'watch', cb))
    }

    $.gulp.task('reports', (cb) => $.runSequence('common', 'analysis', 'webserver', 'clean-app', cb))
    $.gulp.task('test', (cb) => $.runSequence('common', 'js-test', 'clean-app', 'watch', cb))
}