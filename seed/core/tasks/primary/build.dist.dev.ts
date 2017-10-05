import { Task } from 'root/core/seed'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        this.run(
            'build',
            'dist',
            'copy.assets',
            'dev',
            cb
        )
    }
}

new TaskFile()
