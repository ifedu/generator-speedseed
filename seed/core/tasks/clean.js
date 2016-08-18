module.exports = ($, gulp) => {
    const deleteFiles = (files, cb) => {
        const del = require('del')

        del.sync(files, {
            force: true
        })

        cb()
    }

    gulp.task('clean', (cb) => deleteFiles([
        `${$.build.dir}/**/*`,
        $.tmp.dir
    ], cb))

    gulp.task('clean-plato', (cb) => deleteFiles($.reports.plato.dir, cb))
}