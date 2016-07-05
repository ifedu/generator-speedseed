module.exports = (data) => {
    const speedseed = require('speedseed')

    const file = new speedseed.Files()

    const coreConfigJson = {
        "ports": {
            "build": 8001,
            "dist": 8002,
            "plato": 8003,
            "server": 8080,
            "serverReload": 35729
        },

        "indent": {
            "spacesBefore": 2,
            "spacesAfter": 4
        },

        "server": {
            "auth": "/auth",
            "request": "/api",
            "route": "http://localhost"
        },

        "test": {
            "singleRun": true,

            "browsers": ["PhantomJS"],

            "exclude": [],

            "files": [
                "./-build/js/**/*.js",
                "./-build/components/**/*.js",
                "./-tmp/**/*.spec.js"
            ],

            "preprocessors": {}
        }
    }

    const getFramework = {
        angularjs: [
            './-build/vendor/angular/angular.min.js',
            './node_modules/angular-mocks/angular-mocks.js',
        ],

        angular2: [
            './-build/vendor/core-js/client/shim.min.js',
            './-build/vendor/zone.js/dist/zone.js',
            './-build/vendor/reflect-metadata/Reflect.js',
            './-build/vendor/systemjs/dist/system.src.js'
        ],

        jquery: [
            './-build/vendor/jquery/dist/jquery.min.js'
        ],

        polymer: [],

        react: [
            './-build/vendor/react/dist/react-with-addons.min.js',
            './-build/vendor/react-dom/dist/react-dom.min.js'
        ],

        vanillajs: []
    }

    const vendors = getFramework[data.framework]
    const testFiles = coreConfigJson.test.files

    coreConfigJson.test.files = []

    vendors.forEach((vendor) => coreConfigJson.test.files.push(vendor))
    testFiles.forEach((testFile) => coreConfigJson.test.files.push(testFile))

    file.readFile('core-config.json', coreConfigJson)

    file.writeFile('core-config.json', 4, coreConfigJson)
}