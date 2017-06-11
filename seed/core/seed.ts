import Paths from 'root/config/paths'

import Core from 'root/core/core'
import Task from 'root/core/tasks/task'
import Tpl from 'root/core/tpl'

const core: any = new Core()
const paths: any = new Paths()
const tpl: any = new Tpl()

export {
    core,
    paths,
    tpl,
    Task,
}
