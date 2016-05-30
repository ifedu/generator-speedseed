const app = './app'
const build = './-build'
const dist = './-dist'
const reports = './-reports'

module.exports = {
    app: {
        copy: {
            assets: `${app}/assets`,
            vendor: `${app}/_vendor`
        },

        dir: app
    },

    build: {
        copy: {
            assets: `${build}/assets`,
            vendor: `${build}/_vendor`
        },

        dir: build,
        port: 8001
    },

    dist: {
        copy: {
            assets: `${dist}/images`,
            vendor: `${dist}/_vendor`
        },

        dir: dist,
        index: `${dist}/index.html`,
        jsAll: `${dist}/js/all.js`,
        port: 8002,

        vulcanize: {
            dir: `${dist}/components`,
            name: 'main.html'
        }
    },

    indent: {
        dest: app,
        spacesBefore: 4,
        spacesAfter: 2,

        src: [
            `${app}/**/*`
        ]
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