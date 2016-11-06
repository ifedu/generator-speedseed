const generators = require('yeoman-generator')

module.exports = class Yo extends generators.Base {
    constructor(...args) {
        super(...args)

        const packageJson = require('../../package.json')

        this.config.set('core', {
            name: packageJson.name,
            version: packageJson.version
        })

        console.log(`${this.config.get('core').name} version ${this.config.get('core').version}`)
    }

    write() {
        this.composeWith('speedseed:install')
    }
}