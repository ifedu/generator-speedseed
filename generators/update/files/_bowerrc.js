module.exports = function () {
    const $ = require('../../_config.js')

    $.updateFile('.bowerrc', 4, {
        directory: 'app/-vendor'
    })
}