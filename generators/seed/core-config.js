const app = './app'
const build = './-build'
const dist = './-dist'
const reports = './-reports'

module.exports = {
    app: {
        assets: `${app}/assets`,
        css: `${app}/css`,
        dir: app,
        vendor: `${app}/_vendor`
    },

    build: {
        assets: `${build}/assets`,
        css: `${build}/css`,
        dir: build,
        index: `${build}/index.html`,
        js: `${build}/js`,
        jsAll: `${build}/js/all.js`,
        port: 8001,
        vendor: `${build}/vendor`
    },

    dist: {
        dir: dist,
        port: 8002
    },

    reports: {
        dir: reports,
        plato: {
            dir: `${reports}/plato`,
            files: [
                `${build}/**/components/**/*.js`,
                `${build}/**/js/**/*.js`
            ],
            port: 8003
        },
    },

    server: {
        protocol: 'http://',
        request: 'api',
        portReload: 35729
    },

    test: {
        exclude: [
            `${app}/**/_**/**/*.js`,
            `${app}/**/_*.js`,
            `${build}/**/_**/**/*.js`,
            `${build}/**/_*.js`
        ],

        files: [
            `${build}/**/*.js`
        ],

        preprocessors: {
            [`${app}/**/-*.test.js`]: []
        }
    }
}