import { Base, core, prompter } from 'speedseed'

export default class Yo extends Base {
    constructor(args: any, options: any) {
        super(args, options)

        core.setYo(this)
    }

    paths() {
        core.setPath(__dirname, '../../')
    }

    write() {
        core.setOptions()

        core.callTpl({update: true})
    }
}
