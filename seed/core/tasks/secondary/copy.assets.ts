import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    private files: any = paths.src.assets.files

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        return this.gulp
        .src(this.files)
        .pipe(this.gulp.dest(paths.dist.assets.dir))
    }
}

new TaskFile()
