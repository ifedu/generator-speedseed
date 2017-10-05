import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        Task.reload && Task.reload()

        cb()
    }
}

new TaskFile()
