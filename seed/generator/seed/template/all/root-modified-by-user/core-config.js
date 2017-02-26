module.exports = ($) => {
    const speedseed = require('speedseed')
    const file = new speedseed.Files()

    const optionsGeneral = {
        'app': {
            'folder': 'app',
            'inFolder': {
                'assets': 'assets',
                'components': 'components',
                'vendor': 'vendor'
            }
        },
        'build': {
            'folder': 'build',
            'port': 8001
        },
        'dist': {
            'folder': 'dist',
            'inFolder': {
                'index': 'index.html',
                'jsAll': 'js/all.js',
                'appInFolderComponents': {
                    'vulcanizeFile': 'main.html'
                }
            },
            'port': 8002
        },
        'tmp': {
            'folder': 'tmp'
        },
        'server': {
            'auth': '/auth',
            'request': '/api',
            'route': 'http://localhost',
            'port': 8080,
            'portReload': 35729
        },
        'test': {
            'singleRun': true,
            'browsers': [
                'PhantomJS'
            ],
            'exclude': [],
            'files': [
            ],
            'preprocessors': {}
        },
        'reports': {
            'folder': 'reports',
            'inFolder': {
                'plato': {
                    'folder': 'plato',
                    'port': 8003
                }
            }
        },
        'indent': {
            'folder': 'app',
            'spacesBefore': 2,
            'spacesAfter': 4,
            'src': [
                './app/**/*',
                '!./app/assets/**/*',
                '!./app/-vendor/**/*'
            ]
        }
    }

    file.extendFromUser(optionsGeneral, './core-config.json')
    file.extendFromOptions($, optionsGeneral.test.files, {
        framework: {
            angularjs: [
                './node_modules/angular/angular.min.js',
                './node_modules/angular-mocks/angular-mocks.js',
                './-build/js/**/*.js',
                './-build/components/**/*.js',
                './-tmp/**/*.spec.js'
            ],

            angular2: [
                './node_modules/core-js/client/shim.min.js',
                './node_modules/zone.js/dist/zone.js',
                './node_modules/reflect-metadata/Reflect.js',
                './node_modules/systemjs/dist/system.src.js',
                './-build/js/**/*.js',
                './-build/components/**/*.js',
                './-tmp/**/*.spec.js'
            ],

            jquery: [
                './node_modules/jquery/dist/jquery.min.js',
                './-build/js/**/*.js',
                './-build/components/**/*.js',
                './-tmp/**/*.spec.js'
            ],

            react: [
                './node_modules/react/dist/react-with-addons.min.js',
                './node_modules/react-dom/dist/react-dom.min.js',
                './-build/js/**/*.js',
                './-build/components/**/*.js',
                './-tmp/**/*.spec.js'
            ]
        }
    })

    file.writeFile('core-config.json', optionsGeneral, 4)
}