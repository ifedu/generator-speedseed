import { paths, Task } from 'root/core/seed'
import * as packager from 'electron-packager'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {

        packager(paths.electron.packager, (err: any, appPaths: any) => {
            console.log(appPaths)

            cb()
        })
    }
}

new TaskFile()
