import { basename, dirname, sep } from 'path'

import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    private files: any = [
        `${paths.src.dir}/**/*.html`,
    ]

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        return this.gulp
        .src(this.files)
        .pipe(this.gulp.dest(paths.tmp.dir))
    }
}

new TaskFile()

