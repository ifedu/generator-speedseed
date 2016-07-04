const app = './app'
const build = './-build'
const dist = './-dist'
const reports = './-reports'
const tmp = './-tmp'

const assets = 'assets'
const components = 'components'
const js = 'js'
const vendor = 'vendor'

module.exports = ($) => ({
    app: {
        copy: {
            assets: `${app}/${assets}`,
            vendor: `${app}/-${vendor}`
        },

        dir: app
    },

    build: {
        copy: {
            assets: `${build}/${assets}`,
            vendor: `${build}/${vendor}`
        },

        dir: build,
        port: $.ports.build
    },

    dist: {
        copy: {
            assets: `${dist}/${assets}`,
            vendor: `${dist}/${vendor}`
        },

        dir: dist,
        index: `${dist}/index.html`,
        jsAll: `${dist}/${js}/all.js`,
        port: $.ports.dist,

        vulcanize: {
            dir: `${dist}/${components}`,
            name: 'main.html'
        }
    },

    indent: {
        dest: app,
        spacesBefore: $.indent.spacesBefore,
        spacesAfter: $.indent.spacesAfter,

        src: [
            `${app}/**/*`,
            `!${app}/${assets}/**/*`,
            `!${app}/-${vendor}/**/*`
        ]
    },

    reports: {
        dir: reports,
        plato: {
            dir: `${reports}/plato`,
            files: [
                `${build}/**/${components}/**/*.js`,
                `${build}/**/${js}/**/*.js`
            ],
            port: $.ports.plato
        },
    },

    server: {
        auth: $.server.auth,
        request: $.server.request,
        route: $.server.route,
        port: $.ports.server,
        portReload: $.ports.serverReload
    },

    tmp: {
        dir: tmp
    },

    test: $.test
})