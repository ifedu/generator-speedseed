module.exports = ($) => {
    'use strict'

    $.gulp.task('js-test', (cb) => {
        const Server = require('karma').Server

        new Server({
            configFile: $.path.resolve(__dirname, '../karma.conf.js')
        }, () => cb()).start()
    })
}