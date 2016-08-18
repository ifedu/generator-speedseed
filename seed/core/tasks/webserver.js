module.exports = ($, gulp) => {
    gulp.task('webserver', () => {
        const browserSync = require('browser-sync').create()
        const proxyMiddleware = require('http-proxy-middleware')

        $.reload = browserSync.reload

        const assets = $.app.copy.assets.replace($.app.dir, '')
        const vendor = $.app.copy.vendor.replace($.app.dir, '').replace('-', '')

        browserSync.init({
            open: ($.config.open === true) ? 'local' : false,
            port: $.config.port,

            server: {
                baseDir: $.build.dir,

                routes: {
                    [assets]: $.app.copy.assets,
                    [vendor]: 'node_modules'
                },

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