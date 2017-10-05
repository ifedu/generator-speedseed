import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    private files: any = [
        `${paths.build.dir}/**/index.js`,
        `${paths.build.dir}/**/main.js`,
        ...paths.build.cache,
    ]

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        return this.gulp
        .src(this.files)
        .pipe(this.gulp.dest(paths.dist.dir))
    }
}

new TaskFile()
