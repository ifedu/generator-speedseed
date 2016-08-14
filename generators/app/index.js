const generators = require('yeoman-generator')

module.exports = class Yo extends generators.Base {
    constructor(...args) {
        super(...args)

        const packageJson = require('../../package.json')

        this.config.set('coreVersion', `${packageJson.name} version ${packageJson.version}`)

        console.log(this.config.get('coreVersion'))
    }

    write() {
        this.composeWith('speedseed:install')
    }
}