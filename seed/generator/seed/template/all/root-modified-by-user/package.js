module.exports = ($) => {
    const speedseed = require('speedseed')
    const file = new speedseed.Files()

    const optionsGeneral = {
        description: `${$.general.project} with ${$.tpl.framework}`,
        name: $.general.project,
        private: true,
        version: '0.0.0',
        dependencies: {},
        devDependencies: {
            'browser-sync': '2.12.8',
            'del': '2.2.0',
            'express': '4.14.0',
            'extend': '3.0.0',
            'gulp': '3.9.0',
            'gulp-changed': '1.2.1',
            'gulp-data': '1.2.0',
            'gulp-filter': '4.0.0',
            'gulp-htmlmin': '2.0.0',
            'gulp-if': '2.0.1',
            'gulp-minify-inline': '0.2.1',
            'gulp-modify-file': '0.1.0',
            'gulp-plumber': '1.1.0',
            'gulp-rename': '1.2.2',
            'gulp-size': '2.1.0',
            'gulp-transform-indent': '0.3.0',
            'gulp-uglify': '1.2.0',
            'gulp-useref': '3.1.0',
            'gulp-util': '3.0.7',
            'gulp-watch': '4.3.5',
            'http-proxy-middleware': '0.17.0',
            'lodash': '4.13.1',
            'plato': '1.5.0',
            'run-sequence': '1.1.1',
            'webpack': '1.13.2',
            'webpack-stream': '3.2.0'
        },

        engines : {
            node : ">=6.0.0"
        }
    }

    file.extendFromUser(optionsGeneral, './package.json')

    file.extendFromOptions($, optionsGeneral.dependencies, {
        framework: {
            angularjs: {
                'angular': '1.5.6'
            },

            angular2: {
                '@angular/common': '2.1.1',
                '@angular/compiler': '2.1.1',
                '@angular/core': '2.1.1',
                '@angular/forms': '2.1.1',
                '@angular/http': '2.1.1',
                '@angular/platform-browser': '2.1.1',
                '@angular/platform-browser-dynamic': '2.1.1',
                '@angular/router': '3.1.1',
                '@angular/upgrade': '2.1.1',
                'angular-in-memory-web-api': '0.1.13',
                'core-js': '2.4.1',
                'reflect-metadata': '0.1.8',
                'rxjs': '5.0.0-beta.12',
                'systemjs': '0.19.39',
                'zone.js': '0.6.25'
            },

            jquery: {
                'jquery': '3.0.0'
            },

            react: {
                'react': '15.1.0',
                'react-dom': '15.1.0'
            }
        }
    })

    file.extendFromOptions($, optionsGeneral.dependencies, {
        redux: {
            redux: {
                'react-redux': '^4.4.6',
                redux: '^3.6.0'
            }
        }
    })

    file.extendFromOptions($, optionsGeneral.devDependencies, {
        framework: {
            angularjs: {
                'angular-mocks': '1.5.6',
                'gulp-ng-annotate': '2.0.0'
            },

            polymer: {
                'gulp-size': '2.1.0',
                'gulp-vulcanize': '6.1.0'
            },

            react: {
                'gulp-react': '3.1.0'
            }
        },

        js: {
            babeljs: {
                'babel-loader': '6.2.5',
                'babel-plugin-transform-decorators-legacy': '1.3.4',
                'babel-preset-es2015': '6.6.0',
                'babel-preset-react': '6.16.0',
                'babel-preset-stage-0': '^6.16.0',
                'gulp-babel': '6.1.2'
            },

            coffeescript: {
                'coffee-loader': '0.7.2',
                'gulp-coffee': '2.3.2'
            },

            typescript: {
                'gulp-typescript': '2.13.6',
                'ts-loader': '0.9.4',
                'typings': "1.0.5"
            }
        },

        html: {
            jade: {
                'gulp-jade': '1.0.1'
                // 'gulp-jade-inheritance': '0.5.5',
            }
        },

        css: {
            less: {
                'gulp-less': '3.1.0'
            },

            sass: {
                'gulp-sass': '2.3.1'
            },

            scss: {
                'gulp-sass': '2.3.1'
            },

            stylus: {
                'gulp-stylus': '2.0.5'
            }
        },

        'unit-test': {
            jasmine: {
                'jasmine': '2.3.1',
                'karma': '0.13.22',
                'karma-chrome-launcher': '1.0.1',
                'karma-coverage': '1.0.0',
                'karma-jasmine': '1.0.2',
                'karma-phantomjs-launcher': '1.0.0',
                'phantomjs-prebuilt': '2.1.7'
            },

            mocha: {
                'chai': '3.5.0',
                'mocha': '2.4.5',
                'karma': '0.13.22',
                'karma-chai': '0.1.0',
                'karma-chrome-launcher': '1.0.1',
                'karma-coverage': '1.0.0',
                'karma-mocha': '1.0.1',
                'karma-phantomjs-launcher': '1.0.0',
                'phantomjs-prebuilt': '2.1.7'
            }
        }
    })

    file.writeFile('package.json', optionsGeneral, 2)
}