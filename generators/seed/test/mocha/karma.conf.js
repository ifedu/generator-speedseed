module.exports = function (config) {
    const $ = require('./config.js')

    const configKarma = {
        basePath: $.app.dir,
        exclude: $.test.exclude,
        files: $.test.files,
        preprocessors: $.test.preprocessors,

        singleRun: true,

        browsers: ['PhantomJS'],

        frameworks: [
            'chai',
            'mocha'
        ],

        plugins: [
            'karma-chai',
            'karma-mocha',
            'karma-phantomjs-launcher'
        ]
    }

    config.set(configKarma)
}