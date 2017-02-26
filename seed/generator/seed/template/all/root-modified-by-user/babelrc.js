module.exports = ($) => {
    const speedseed = require('speedseed')
    const file = new speedseed.Files()

    const optionsGeneral = {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-decorators-legacy']
    }

    file.extendFromUser(optionsGeneral, './.babelrc')

    file.writeFile('.babelrc', optionsGeneral, 4)
}