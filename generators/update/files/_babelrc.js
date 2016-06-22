module.exports = function () {
    const $ = require('../../_config.js')

    $.updateFile('.babelrc', 4, {
        presets: ['es2015'],
        plugins: ['transform-decorators-legacy']
    })
}