import { Task } from 'root/core/seed'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        this.run(
            'clean',
            'bundle.vendor',
            'bundle',
            'post-modify-file.js',
            cb
        )
    }
}

new TaskFile()
