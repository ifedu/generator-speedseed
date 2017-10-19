import { Base, core } from 'speedseed'

const packageNpm = require('../../package.json')

export default class Yo extends Base {
    constructor(args: any, options: any) {
        super(args, options)

        core.setYo(this)

        core.setGui(options.speedseedgui)
        core.setUpdate(options.update)

        core.setVersion('core', packageNpm)
        core.viewVersion(packageNpm)
    }

    write() {
        this.composeWith('speedseed:install', {})
    }
}
