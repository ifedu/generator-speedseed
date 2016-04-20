module.exports = ($) => {
    'use strict'


    $.gulp.task('clean', (cb) => {
        const del = require('del')
        
        return del($.deploy.dir, {
            force: true
        }, cb)
    })
}