const generators = require('yeoman-generator')

const speedseed = require('speedseed')

module.exports = class Yo extends speedseed.Yo {
    constructor(...args) {
        super(...args)

        const packageJson = require('../../package.json')

        this.config.set('coreVersion', `${packageJson.name} version ${packageJson.version}`)

        console.log(this.config.get('coreVersion'))
    }

    // prompting() {
        // const choicesRun = [{ name: 'Install', value: 'install' }]
        // let runDefault

        // if (this.config.get('install') === 'true') {
        //     runDefault = 1
        //     choicesRun.push({ name: 'Update', value: 'update' })
        // } else {
        //     runDefault = 0
        // }

        // super.prompting(this.async(), {
        //     default: this.config.get('install') || runDefault,
        //     message: 'Install or Update?',
        //     name: 'run',
        //     type: 'list',

        //     choices: choicesRun
        // })
    // }

    write() {
        (this.config.get('isInstall') !== true)
            ? this.composeWith('speedseed:install')
            : this.composeWith('speedseed:update')
    }
}