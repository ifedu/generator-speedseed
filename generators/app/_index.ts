import { Base, core } from 'speedseed'

const packageNpm = require('../../package.json')

export default class Yo extends Base {
    constructor(args: any, options: any) {
        super(args, options)

        core.setYo(this)

        core.setCore(packageNpm)
        core.viewVersion(packageNpm)
    }

    write() {
        this.composeWith('speedseed:install', {})
    }
}
