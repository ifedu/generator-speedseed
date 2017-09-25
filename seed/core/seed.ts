import { merge } from 'lodash'

import PathsCore from 'root/core/paths'
import paths from 'root/config/paths'

import Core from 'root/core/core'
import Task from 'root/core/tasks/task'
import Tpl from 'root/core/tpl'

const core: any = new Core()
const pathsCore: any = new PathsCore()
const tpl: any = new Tpl()

merge(paths, pathsCore)

export {
    core,
    paths,
    tpl,
    Task,
}
