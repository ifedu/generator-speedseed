import { readFileSync } from 'fs'
import { join } from 'path'

import { core, paths } from 'root/core/seed'

export default class Tpl {
    args: any = core.args
    context: string
    paths: any = paths
    readFileSync: any = readFileSync

    include(file: any) {
        let fileRoute = join(this.context, file)

        return readFileSync(fileRoute)
    }
}
