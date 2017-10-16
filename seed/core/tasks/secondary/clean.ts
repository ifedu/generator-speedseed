import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    private files: any = [
        paths.build.dir,
        paths.build.dirCopy,
        paths.dist.dir,
        paths.dist.dirCopy,
        paths.tmp.dir,

        paths.electron.build.dir,
    ]

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        this.deleteFiles(this.files, cb)
    }
}

new TaskFile()
