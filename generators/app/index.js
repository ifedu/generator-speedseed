const generators = require('yeoman-generator')

module.exports = class Yo extends generators.Base {
    constructor(...args) {
        super(...args)

        const packageJson = require('../../package.json')

        this.config.set('core', {
            name: packageJson.name,
            version: packageJson.version
        })

        const {name, version} = packageJson

        console.log(`${name} version ${version}`)
    }

    write() {
        this.composeWith('speedseed:install')
    }
}