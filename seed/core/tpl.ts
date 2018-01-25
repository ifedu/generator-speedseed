import { join } from 'path'

import { core, paths } from 'root/core/seed'

export default class Tpl {
    args: any = core.args
    context: string
    paths: any = paths
}
