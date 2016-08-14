const speedseed = require('speedseed')

module.exports = class Yo extends speedseed.Config {
    constructor(...args) {
        super(...args)
    }

    paths() {
        const path = require('path')

        this.sourceRoot(path.resolve(__dirname, '../../'))
    }

    write() {
        this._create('seed/core', './.core')
    }
}