import { core, paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    private files: any = (core.args.dist)
        ? `${paths.dist.dir}/**/*`
        : `${paths.build.dir}/**/*`

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        return this.gulp
        .src(this.files)
        .pipe(this.gulp.dest(paths.electron.build.dir))
    }
}

new TaskFile()
