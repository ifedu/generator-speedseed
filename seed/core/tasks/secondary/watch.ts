import * as run from 'run-sequence'
import * as watch from 'glob-watcher'

import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        watch([
            `${paths.src.dir}/**/*`,
            `!${paths.src.assets.files}`,
        ], {}, (cb: any) => {
            console.log('compiling...')
            cb()
        })
    }
}

new TaskFile()
