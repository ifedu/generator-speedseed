import { existsSync, mkdirSync } from 'fs'
import { Base, Helper, core, files } from 'speedseed'

export default class Yo extends Base {
    constructor(args: any, options: any) {
        super(args, options)
    }

    paths() {
        core.setPath(__dirname, '../../')
    }

    write() {
        const dir = core.getPath(__dirname, '../../')

        if (core.options.templateFiles === true) {
            files.create(`${dir}/seed/copy`, './', false)
            files.create(`${dir}/seed/root`, './')
            files.create(`${dir}/seed/gitignore`, './.gitignore', false)
        }

        files.create(`${dir}/seed/core`, './core')
        files.create(`${dir}/seed/tpl`, './')
    }

    end() {
        const options: any = {
            core: this,
            speedseedgui: core.speedseedgui
        }

        this.composeWith('speedseed:constructs', options)

        core.yo.config.set('templateFiles', false)
    }
}
