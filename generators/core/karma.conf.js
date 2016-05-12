module.exports = function (config) {
    const $ = require('./config.js')

    const configKarma = {
        basePath: $.deploy.dir,
        singleRun: true,

        browsers: ['PhantomJS'],

        exclude: [
            '**/_**/**/*.js',
            '**/_*.js'
        ],

        files: [
            'js/**/*.js'
        ],

        frameworks: [
            'mocha'
        ],

        plugins: [
            'karma-mocha',
            'karma-phantomjs-launcher'
        ],

        preprocessors: {
            '**/*.test.es5.js': ['browserify']
        }
    }

    config.set(configKarma)
}