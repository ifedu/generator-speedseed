import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        const packager = require('electron-packager')

        packager(paths.electron.packager, (err: any, appPaths: any) => {
            if (err) console.log(err)
            console.log(appPaths)

            cb()
        })
    }
}

new TaskFile()
