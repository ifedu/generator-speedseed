module.exports = function () {
    const $ = require('../../_config.js')

    $.updateFile('.bowerrc', {
        directory: 'app/-vendor'
    })
}