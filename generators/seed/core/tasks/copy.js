module.exports = ($, gulp) => {
    'use strict'

    const copy = (ext, src, dest) =>
        () => {
            const changed = require('gulp-changed')

            return gulp
            .src(src)
            .pipe(changed($.build.dir, ext))
            .pipe(gulp.dest(dest))
        }

    gulp.task('copy-assets', copy({}, `${$.app.copy.assets}/**`, $.build.copy.assets))
    gulp.task('copy-vendor', copy({}, `${$.app.copy.vendor}/**`, $.build.copy.vendor))

    gulp.task('copy-css', copy({extension: '.css'}, [
        `${$.app.dir}/**/*.css`,

        `!${$.app.dir}/**/-*.css`,
        `!${$.app.dir}/**/-**/**/*.css`,

        `!${$.app.dir}/**/_*.css`,
        `!${$.app.dir}/**/_**/**/*.css`
    ], $.build.dir))

    gulp.task('copy-html', copy({extension: '.html'}, [
        `${$.app.dir}/**/*.html`,

        `!${$.app.dir}/**/-*.html`,
        `!${$.app.dir}/**/-**/**/*.html`,

        `!${$.app.dir}/**/_*.html`,
        `!${$.app.dir}/**/_**/**/*.html`
    ], $.build.dir))

    gulp.task('copy-json', copy({extension: '.json'}, [
        `${$.app.dir}/**/*.json`,

        `!${$.app.dir}/**/-*.json`,
        `!${$.app.dir}/**/-**/**/*.json`,

        `!${$.app.dir}/**/_*.json`,
        `!${$.app.dir}/**/_**/**/*.json`
    ], $.build.dir))

    gulp.task('copy', (cb) => $.runSequence(['copy-assets', 'copy-css', 'copy-html', 'copy-json', 'copy-vendor'], cb))
}