import { core, paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    private files: any = paths.src.assets.files

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        const filesDest: any = (core.args.dist)
        ? paths.dist.assets.dir
        : paths.build.assets.dir

        return this.gulp
        .src(this.files)
        .pipe(this.gulp.dest(filesDest))
    }
}

new TaskFile()
