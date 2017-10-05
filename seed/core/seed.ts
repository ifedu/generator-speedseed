import { mergeWith } from 'lodash'

import paths from 'root/config/paths'

import Core from 'root/core/core'
import PathsCore from 'root/core/paths'
import Task from 'root/core/tasks/task'
import Tpl from 'root/core/tpl'

const core: any = new Core()
const pathsCore: any = new PathsCore()
const tpl: any = new Tpl()

mergeWith(paths, pathsCore, core.concatArr)

export {
    core,
    paths,
    tpl,
    Task,
}
