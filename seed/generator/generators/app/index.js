const speedseed = require('speedseed')
const path = require('path')

module.exports = speedseed.getYo({
    routeTpl: path.resolve(__dirname, '../../'),
    options: require('../../seed/options.js')
})