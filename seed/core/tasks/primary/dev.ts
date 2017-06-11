import { Task } from 'root/core/seed'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        this.run(
            [
                'watch',
                'webserver',
            ],
            cb
        )
    }
}

new TaskFile()
