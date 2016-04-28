module.exports = function (config) {
    const $ = require('./config.js')

    const configKarma = {
        basePath: $.deploy.dir,
        singleRun: true,

        browserify: {
            debug: true
        },

        browsers: ['PhantomJS'],

        exclude: [
            '**/vendor/**/*.js',
            '**/_**/**/*.js',
            '**/_*.js'
        ],

        files: [
            // 'vendor/angular/angular.js',
            // 'vendor/angular-ui-router/release/angular-ui-router.min.js',
            // 'vendor/angular-mocks/angular-mocks.js',
            // 'vendor/script.js/dist/script.min.js',
            // 'js/index.js',
            // 'js/controllers/parent.ctrl.js',
            // 'js/services/*.js',
            'js/**/*.js'
            // 'views/**/*.js'
        ],

        frameworks: [
            'browserify',
            'jasmine'
        ],

        plugins: [
            'karma-browserify',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ],

        preprocessors: {
            '**/*test.js': ['browserify'],
            '**/*config.js': ['browserify']
        }
    }

    // configKarma.browsers = ['Chrome'];
    // configKarma.singleRun = false;

    config.set(configKarma)
}