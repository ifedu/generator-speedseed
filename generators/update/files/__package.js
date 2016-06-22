module.exports = function () {
    const $ = require('../../_config.js')

    global.ss.package = {
        description: `${this.config.get('project')} with ${this.config.get('template')}`,
        name: this.config.get('project'),
        private: true,
        version: '0.0.0',
        dependencies: {},
        devDependencies: {
            'babel-preset-es2015': '^6.6.0',
            'babel-plugin-transform-decorators-legacy': '^1.3.4',
            'browser-sync': '^2.12.8',
            'del': '^2.2.0',
            'express': '^4.14.0',
            'extend': '^3.0.0',
            'gulp': '^3.9.0',
            'gulp-babel': '^6.1.2',
            'gulp-changed': '^1.2.1',
            'gulp-data': '^1.2.0',
            'gulp-filter': '^4.0.0',
            'gulp-htmlmin': '^2.0.0',
            'gulp-if': '^2.0.1',
            'gulp-jade': '^1.0.1',
            'gulp-jade-inheritance': '^0.5.5',
            'gulp-minify-inline': '^0.2.1',
            'gulp-modify-file': '^0.1.0',
            'gulp-plumber': '^1.1.0',
            'gulp-rename': '^1.2.2',
            'gulp-size': '^2.1.0',
            'gulp-transform-indent': '^0.3.0',
            'gulp-uglify': '^1.2.0',
            'gulp-useref': '^3.1.0',
            'gulp-util': '^3.0.7',
            'gulp-watch': '^4.3.5',
            'http-proxy-middleware': '^0.15.2',
            'lodash': '^4.13.1',
            'plato': '^1.5.0',
            'run-sequence': '^1.1.1'
        },

        engines : {
            node : ">=4.0.0"
        },

        scripts: {
            'build': 'gulp build --open=false',
            'build-open': 'gulp build',
            'clean-all': 'gulp clean-all',
            'component': 'yo speedseed:component',
            'dist': 'gulp build --dist=true --server=false',
            'dist-open': 'gulp build --dist=true',
            'indent': 'gulp indent',
            'spec': 'gulp test',
            'reports': 'gulp reports',
            'server': 'node .core/server',
            'typings': 'typings install',
            'update': 'npm i generator-speedseed -g    &&    yo speedseed:update    &&    npm i'
        }
    }

    $.updateFile('package.json', 2, global.ss.package)
}