module.exports = ($) => {
    'use strict'

    $.gulp.task('oneJS', (done) => {
        const useref = require('gulp-useref')

        return $
        .gulp
        .src($.build.index)
        .pipe(require('gulp-useref')())
        .pipe($.gulp.dest($.build.dir))
    })

    $.gulp.task('compress-html', () => {
        const htmlmin = require('gulp-htmlmin')

        return $
        .gulp
        .src(`${$.build.dir}/**/*.html`)
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe($.gulp.dest($.build.dir))
    })

    $.gulp.task('compress-js', () => {
        const uglify = require('gulp-uglify')

        return $
        .gulp
        .src([
            `${$.build.dir}/**/*.js`,
            `!${$.build.dir}/**/_**/**/*`,
            `!${$.build.dir}/**/-*.js`,
            `!${$.build.dir}/**/.*.js`
        ])
        .pipe(uglify())
        .pipe($.gulp.dest($.build.dir))
    })

    $.gulp.task('vulcanize', (cb) => {
        const htmlmin = require('gulp-htmlmin')
        const minifyInline = require('gulp-minify-inline')
        const size = require('gulp-size')
        const rename = require('gulp-rename')
        const vulcanize = require('gulp-vulcanize')

        return $
        .gulp
        .src(`${$.dist.vulcanize.dir}/${$.dist.vulcanize.name}`)
        .pipe(vulcanize({
            inlineCss: true,
            inlineScripts: true,
            stripComments: true
        }))
        .pipe($.gulp.dest($.dist.vulcanize.dir))
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(minifyInline())
        .pipe($.gulp.dest($.dist.vulcanize.dir))
        .pipe(size({title: 'vulcanize'}))
    })

    $.gulp.task('minified', (cb) => {
        if ($.yo.framework === 'polymer') {
            return $.runSequence('vulcanize', 'oneJS', ['compress-html', 'compress-js'], cb)
        } else {
            return $.runSequence('oneJS', ['compress-html', 'compress-js'], 'clean-dist', cb)
        }
    })
}