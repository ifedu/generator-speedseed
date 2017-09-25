import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    private comonTask: any = [
        'compress.css',
        'compress.html',
        'compress.js',
    ]

    protected init(cb: any) {
        (paths.yo.framework === 'polymer')
        ? this.run(
            'vulcanize',
            this.comonTask,
            cb
        )
        : this.run(
            this.comonTask,
            cb
        )
    }

}

new TaskFile()
