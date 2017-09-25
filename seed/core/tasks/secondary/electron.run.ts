import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        require(`${process.cwd()}/${paths.electron.file}`)

        cb()
    }
}

new TaskFile()
