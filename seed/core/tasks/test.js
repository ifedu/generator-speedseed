module.exports = ($, gulp) => {
    'use strict'

    gulp.task('js-test', (cb) => {
        const path = require('path')
        const Server = require('karma').Server

        new Server({
            configFile: path.resolve(__dirname, '../karma.conf.js')
        }, () => cb()).start()
    })
}