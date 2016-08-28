const speedseed = require('speedseed')

module.exports = class Yo extends speedseed.Config {
    constructor(...args) {
        super(...args)

        this._setConfig(this.options)
    }

    paths() {
        const path = require('path')

        this.sourceRoot(path.resolve(__dirname, '../../'))
    }

    write() {
        this._create('seed/core', './.core')
        this._create('seed/root/**/*', './')
    }
}