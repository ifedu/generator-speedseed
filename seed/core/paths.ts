import { core } from 'root/core/seed'

export default class PathsCore {
    build: any = {
        assets: {
            dir: '-build/assets',
        },

        cache: [
            '-build/commons.js',
            '-build/vendor.js',
        ],

        dir: '-build',
    }

    dist: any = {
        assets: {
            dir: '-dist/assets',
        },

        dir: '-dist',
    }

    environments: any = {
        dir: 'environments',
    }

    html: any = {
        pug: {
            doctype: 'html',
            pretty: true,
        },
    }

    htmlDist: any = {
        pug: {
            doctype: 'html',
            pretty: false,
        },
    }

    server: any = {
        portBuild: 8001,
        portReload: 8002,
    }

    src: any = {
        assets: {
            dir: 'src/assets',
            dirRelative: 'assets',
            files: 'src/assets/**/*',
        },

        dir: 'src',

        vendor: {
            files: 'src/vendor/**/*',
        },
    }

    starterFiles: any = {
        index: 'index',
        main: 'main',
    }

    styles: any = {
        less: { compress: false },
        sass: { outputStyle: '' },
        scss: { outputStyle: '' },
        styl: { compress: false, linenos: true }
    }

    stylesDist: any = {
        less: { compress: true },
        sass: { outputStyle: 'compressed' },
        scss: { outputStyle: 'compressed' },
        styl: { compress: true }
    }

    tasks: any = {
        dir: {
            config: '../../config/tasks',
            css: 'css',
            html: 'html',
            primary: 'primary',
            secondary: 'secondary',
            test: 'test',
        },
    }

    test: any = {
        karma: {
            options: {
                autowatch: false,
                basePath: '.',
                port: 9876,

                files: [
                    "./-build/vendor.js",
                    "./-build/commons.js",
                    "./-build/**/*.spec.js"
                ],

                frameworks: [],

                plugins: [
                    'karma-chrome-launcher',
                    'karma-phantomjs-launcher',
                ],
            }
        }
    }

    tmp: any = {
        assets: {
            files: 'tmp/assets/**/*',
        },

        dir: '-tmp',

        vendor: {
            dll: '-tmp/vendor.json',
        },
    }

    yo: any = require('../.yo-rc.json')['generator-speedseed']

    constructor() {
        this.test.karma.options.browsers = (core.args.dev)
        ? ['Chrome']
        : ['PhantomJS']

        this.test.karma.options.singleRun = !(core.args.dev)
    }
}
