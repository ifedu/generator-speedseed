import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    private files: any = [
        `${paths.build.dir}/**/${paths.starterFiles.index}.css`,
        `${paths.build.dir}/**/${paths.starterFiles.main}.css`,
    ]

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        Task.reload && Task.reload()

        cb()
    }
}

new TaskFile()
