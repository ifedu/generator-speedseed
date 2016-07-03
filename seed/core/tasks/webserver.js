module.exports = ($, gulp) => {
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
                    proxyMiddleware($.server.auth, { target: `${$.server.route}:${$.server.port}` }),
                    proxyMiddleware($.server.request, { target: `${$.server.route}:${$.server.port}` })
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