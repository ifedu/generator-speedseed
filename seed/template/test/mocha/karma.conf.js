module.exports = function (config) {
    const $ = require('./config.js')

    const configKarma = {
        basePath: '../',
        exclude: $.test.exclude,
        files: $.test.files,
        preprocessors: $.test.preprocessors,

        singleRun: $.test.singleRun,

        browsers: $.test.browsers,

        frameworks: [
            'chai',
            'mocha'
        ],

        plugins: [
            'karma-chai',
            'karma-mocha',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ]
    }

    config.set(configKarma)
}