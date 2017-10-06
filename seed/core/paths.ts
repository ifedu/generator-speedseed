import { core } from 'root/core/seed'

const build = '-build'
const dist = '-dist'
const electron = 'electron'
const src = 'src'
const tmp = '-tmp'

const paths: any = {
    build: {
        assets: {
            dir: `${build}/assets`,
            files: `${build}/assets/**/*`,
        },

        cache: [
            `${build}/commons.js`,
            `${build}/vendor.js`,
        ],

        dir: build,

        files: {
            js: [
                `${build}/**/*.coffee`,
                `${build}/**/*.js`,
                `${build}/**/*.jsx`,
                `${build}/**/*.ts`,
            ],
        },

        vendor: {
            dll: `${build}/vendor.json`,
        },
    },

    bundle: {
        dependenciesSpec: [
            'chai',
            'jasmine',
            'mocha',
        ],

        vendor: {
            includePackageDependencies: true,

            dependencies: [],
        },
    },

    dist: {
        assets: {
            dir: `${dist}/assets`,
        },

        dir: dist,
    },

    electron: {
        dir: './electron',
        file: 'core/electron',
        livereload: 'http://localhost:8001/browser-sync/browser-sync-client.js?v=2.18.13',

        build: {
            dir: `${electron}/${build}`,
        },

        packager: {
            asar: true,
            dir: `./${electron}`,
            name: '_myproject',
        },
    },

    server: {
        portBuild: 8001,
        portReload: 8002,
    },

    src: {
        assets: {
            dir: `${src}/assets`,
            dirRelative: `assets`,
            files: `${src}/assets/**/*`,
        },

        dir: src,

        files: {
            cssIndex: [
                `${src}/**/*index.css`,
                `${src}/**/*main.css`,

                `${src}/**/*index.less`,
                `${src}/**/*main.less`,

                `${src}/**/*index.sass`,
                `${src}/**/*main.sass`,

                `${src}/**/*index.scss`,
                `${src}/**/*main.scss`,

                `${src}/**/*index.styl`,
                `${src}/**/*main.styl`,
            ],

            js: [
                `${src}/**/*.coffee`,
                `${src}/**/*.js`,
                `${src}/**/*.jsx`,
                `${src}/**/*.ts`,
            ],

            jsIndex: [
                `${src}/**/*index.coffee`,
                `${src}/**/*main.coffee`,

                `${src}/**/*index.js`,
                `${src}/**/*main.js`,

                `${src}/**/*index.jsx`,
                `${src}/**/*main.jsx`,

                `${src}/**/*index.ts`,
                `${src}/**/*main.ts`,
            ],

            main: [
                `${src}/**/*index.*`,
                `${src}/**/*main.*`,
            ],

            unitTestAll: `${src}/**/*.spec*`,
        }
    },

    stylesDist: {
        less: { compress: true },
        sass: { outputStyle: 'compressed' },
        scss: { outputStyle: 'compressed' },
        styl: { compress: true }
    },

    tasks: {
        dir: {
            config: '../../config/tasks',
            css: 'css',
            html: 'html',
            primary: 'primary',
            secondary: 'secondary',
            test: 'test',
        },
    },

    test: {
        karma: {
            options: {
                autowatch: false,
                basePath: '.',
                port: 9876,

                files: [
                    `./${build}/vendor.js`,
                    `./${build}/libs.js`,
                    `./${build}/commons.js`,
                    `./${build}/**/*.spec.js`,
                ],

                frameworks: [],

                plugins: [
                    'karma-chrome-launcher',
                    'karma-phantomjs-launcher',
                ],
            }
        },
    },

    tmp: {
        dir: tmp,
    },

    yo: require('../.yo-rc.json')['generator-speedseed']
}

export default class PathsCore {
    constructor() {
        paths.test.karma.options.browsers = (core.args.dev)
        ? ['Chrome']
        : ['PhantomJS']

        paths.test.karma.options.singleRun = !(core.args.dev)

        return paths
    }
}
