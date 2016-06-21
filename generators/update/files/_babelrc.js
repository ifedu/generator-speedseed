module.exports = function () {
    const $ = require('../../_config.js')

    $.updateFile('.babelrc', {
        presets: ['es2015'],
        plugins: ['transform-decorators-legacy']
    })
}