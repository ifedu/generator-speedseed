import { existsSync, readdirSync, readFile } from 'fs'
import { Base, construct, core } from 'speedseed'

export default class Yo extends Base {
    constructor(args: any, options: any) {
        super(args, options)

        core.setYo(this)

        core.setGui(options.speedseedgui)
    }

    paths() {
        core.setPath(__dirname, '../../')
    }

    write() {
        core.setOptions()

        construct.setJson(`${core.root}/core/construct`)
        construct.setJson(`${core.root}/config/construct`)
        construct.writeJsonConstruct()
    }
}
