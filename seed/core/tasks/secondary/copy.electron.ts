import { core, paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        const filesDest: any = (core.args.dist)
            ? paths.dist.assets.dir
            : paths.build.assets.dir

        return this.gulp
        .src(`${process.cwd()}/package.json`)
        .pipe(this.gulp.dest(paths.electron.tmp.dir))
    }
}

new TaskFile()
