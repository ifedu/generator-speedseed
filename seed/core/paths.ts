import { core } from 'root/core/seed'

let build = '-build'
const dist = '-dist'
const electronSrc = 'electron-src'
const electronTmp = `${electronSrc}/-electron`
const portBuild = 8001
const src = 'src'

export default class PathsCore {
    constructor() {
        if (core.args.electron) {
            build = `${electronTmp}/${build}`
        }

        const paths: any = {
            api: {
                routeLocalHost: 'http://localhost:8080',
                routeLocalPathName: '/api',
                routeProd: 'http://myserverapi',

                getRoute() {
                    return (paths.dev)
                        ? `${this.routeLocalPathName}/`
                        : this.routeProd
                }
            },

            build: {
                assets: {
                    dir: `${build}/assets`,
                    files: `${build}/assets/**/*`,
                },

                cache: [
                    `${build}/vendor.js`,
                ],

                dir: build,
                dirCopy: '-build',

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
                dirCopy: '-dist',
            },

            electron: {
                dir: electronSrc,
                file: 'core/electron',
                index: `${electronSrc}/index`,
                main: `${electronSrc}/main`,
                livereload: `http://localhost:${portBuild}/browser-sync/browser-sync-client.js?v=2.18.13`,

                build: {
                    dir: `${electronTmp}/${build}`,
                },

                packager: {
                    asar: false,
                    dir: `./${electronSrc}`,
                    name: '_myproject',
                },

                tmp: {
                    dir: electronTmp,
                },
            },

            server: {
                portBuild,
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
                        basePath: '.',
                        port: 9876,

                        files: [
                            `./${build}/vendor.js`,
                            `./${build}/libs.js`,
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

            yo: require('../.yo-rc.json')['generator-speedseed']
        }

        paths.test.karma.options.browsers = (core.args.dev)
            ? ['Chrome']
            : ['PhantomJS']

            paths.test.karma.options.autowatch = !!core.args.dev
            paths.test.karma.options.singleRun = !core.args.dev

        return paths
    }
}
