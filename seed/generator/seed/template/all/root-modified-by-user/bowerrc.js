module.exports = ($) => {
    const speedseed = require('speedseed')
    const file = new speedseed.Files()

    const optionsGeneral = {
        directory: 'app/-vendor'
    }

    file.extendFromUser(optionsGeneral, './.bowerrc')

    file.writeFile('.bowerrc', optionsGeneral, 4)
}