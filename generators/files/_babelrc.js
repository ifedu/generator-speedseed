module.exports = (data) => {
    const speedseed = require('speedseed')

    const file = new speedseed.Files()

    file.updateFile('.babelrc', 4, {
        presets: ['es2015'],
        plugins: ['transform-decorators-legacy']
    })
}