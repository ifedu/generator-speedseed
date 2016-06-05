module.exports = ($, gulp) => {
    'use strict'

    gulp.task('webserver', () => {
        const browserSync = require('browser-sync').create()

        $.reload = browserSync.reload

        browserSync.init({
            open: ($.config.open !== false) ? 'local' : false,
            port: $.config.port,

            server: {
                baseDir: $.build.dir
            },

            ui: {
              port: $.server.portReload
            }
        }, () => {
            setTimeout(() => {
                $.reload()
            }, 500)
        })

        const express = require('express')
        const path = require('path')
        const request = require('request')

        const app = express()

        app
        .use(express.static($.build.dir))
        .use('/*', (req, res) => res.sendFile(path.resolve(__dirname, `../../${$.build.dir}`)))
        .use(`/${$.server.request}`, (req, res) => {
            req
            .pipe(request(`${$.server.protocol}${$.server.request}${req.path}`)
                .on('error', (err) => console.log(`${$.server.protocol}${$.server.request}${req.path} NOT FOUND`))
            )
            .pipe(res)
        })
    })
}