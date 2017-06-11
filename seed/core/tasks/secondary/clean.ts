import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    private files: any = [
        paths.build.dir,
        paths.dist.dir,
        paths.tmp.dir,
    ]

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        this.deleteFiles(this.files, cb)
    }
}

new TaskFile()
