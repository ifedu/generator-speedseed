module.exports = ($, gulp) => {
    gulp.task('indent', () => {
        const indent = require('gulp-transform-indent')

        return gulp
        .src($.indent.src)
        .pipe(indent({
            spacesBefore: $.indent.spacesBefore,
            spacesAfter: $.indent.spacesAfter
        }))
        .pipe(gulp.dest($.indent.dest))
    })
}