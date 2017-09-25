import { readFileSync } from 'fs'
import * as modifyFile from 'gulp-modify-file'
import { template } from 'lodash'
import { dirname, normalize, sep } from 'path'

import { core, paths } from 'root/core/seed'

export default class Tpl {
    args: any = core.args
    dirInclude: string
    paths: any = paths

    include(file: any) {
        let fileTmp = normalize(`${this.dirInclude}/${file}`)

        return readFileSync(fileTmp)
    }

    modifyFile() {
        return modifyFile(this.translateTpl)
    }

    private translateTpl = (content: string, route:string) => {
        route = this.getRoute(route, paths.src.dir, paths.tmp.dir)

        this.dirInclude = dirname(route)

        try {
            return template(content, {
                evaluate: /\/\*\<([\s\S]+?)\>\*\//g,
                interpolate: /\/\*\<=([\s\S]+?)\>\*\//g,
                escape: /\/\*\<-([\s\S]+?)\>\*\//g,
            })(this)
        } catch (e) {
            console.log(`ERROR IN ${route}`)

            return content
        }
    }

    private getRoute(route:string, dirInit: string, dirDest: string) {
        return route
        .replace(
            `${sep}${dirInit}`,
            `${sep}${dirDest}`,
        )
    }
}
