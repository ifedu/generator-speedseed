module.exports = function () {
    const fs = require('fs')

    const app = './app'
    const build = './-build'
    const dist = './-dist'
    const reports = './-reports'

    const assets = 'assets'
    const components = 'components'
    const js = 'js'
    const vendor = 'vendor'

    const coreConfig = {
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
            port: 8001
        },

        copy: {
            node_modules: []
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
            auth: '/auth',
            request: '/api',
            routeApi: 'http://',
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

    const getFramework = {
        angularjs: [
            'angular'
        ],

        angular2: [
            '@angular',
            'angular2-in-memory-web-api',
            'bootstrap',
            'core-js',
            'reflect-metadata',
            'rxjs',
            'systemjs',
            'zone.js'
        ],

        jquery: [
            'jquery'
        ],

        polymer: [
            'Polymer'
        ],

        react: [
            'react',
            'react-dom'
        ],

        vanillajs: []
    }

    const extend = require('extend')

    const file = (fs.existsSync('./.core-config.js') === true)
        ? JSON.parse(fs.readFileSync('./.core-config.js', 'utf8'))
        : {}

    extend(
        true,
        coreConfig,
        file
    )

    extend(
        true,
        coreConfig.copy.node_modules,
        getFramework[this.config.get('framework')]
    )

    fs.writeFileSync('.core-config.json', JSON.stringify(coreConfig, null, 4))
}