module.exports = ($) => {
    'use strict'

    $.gulp.task('templateCache', (done) => {
        const templateCache = require('gulp-angular-templatecache')

        return $
        .gulp
        .src([`${$.deploy.dir}/**/directives/**/*.html`])
        .pipe(templateCache('templates.js', {
            standalone: true
        }))
        .pipe($.gulp.dest($.deploy.js))
    })
}