module.exports = (data) => {
    const speedseed = require('speedseed')

    const file = new speedseed.Files()

    file.updateFile('.bowerrc', 4, {
        directory: 'app/-vendor'
    })
}