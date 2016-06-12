module.exports = ($, gulp) => {
    'use strict'

    gulp.task('webserver', () => {
        const browserSync = require('browser-sync').create()
        const proxyMiddleware = require('http-proxy-middleware')

        $.reload = browserSync.reload

        browserSync.init({
            open: ($.config.open !== false) ? 'local' : false,
            port: $.config.port,

            server: {
                baseDir: $.build.dir,
                middleware: [
                    proxyMiddleware($.server.auth, { target: $.server.routeApi }),
                    proxyMiddleware($.server.request, { target: $.server.routeApi })
                ]
            },

            ui: {
              port: $.server.portReload
            }
        }, () => {
            setTimeout(() => {
                $.reload()
            }, 500)
        })
    })
}