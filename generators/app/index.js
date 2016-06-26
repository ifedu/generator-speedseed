const generators = require('yeoman-generator')

const speedseed = require('speedseed')

module.exports = class Yo extends speedseed.Yo {
    constructor(...args) {
        super(...args)

        const packageJson = require('../../package.json')

        this.config.set('coreVersion', `${packageJson.name} version ${packageJson.version}`)

        console.log(this.config.get('coreVersion'))
    }

    write() {
        (this.config.get('isInstall') !== true)
            ? this.composeWith('speedseed:install')
            : this.composeWith('speedseed:update')
    }
}