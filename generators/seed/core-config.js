const app = './app'
const build = './-build'
const dist = './-dist'
const reports = './-reports'

const assets = 'assets'
const components = 'components'
const js = 'js'
const vendor = '.vendor'

module.exports = {
    app: {
        copy: {
            assets: `${app}/${assets}`,
            vendor: `${app}/${vendor}`
        },

        dir: app
    },

    build: {
        copy: {
            assets: `${build}/${assets}`,
            vendor: `${build}/${vendor}`
        },

        dir: build,
        port: 8001
    },

    dist: {
        copy: {
            assets: `${dist}/${assets}`,
            vendor: `${dist}/${vendor}`
        },

        dir: dist,
        index: `${dist}/index.html`,
        jsAll: `${dist}/${js}/all.js`,
        port: 8002,

        vulcanize: {
            dir: `${dist}/${components}`,
            name: 'main.html'
        }
    },

    indent: {
        dest: app,
        spacesBefore: 2,
        spacesAfter: 4,

        src: [
            `${app}/**/*`,
            `!${app}/${assets}/**/*`,
            `!${app}/${vendor}/**/*`
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