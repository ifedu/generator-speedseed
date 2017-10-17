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
            'copy.electron',
            'bundle.electron',
            'electron.packager',
            cb
        )
    }
}

new TaskFile()
