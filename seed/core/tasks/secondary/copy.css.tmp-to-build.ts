import * as plumber from 'gulp-plumber'

import { paths, tpl, Task } from 'root/core/seed'

class TaskFile extends Task {
    private files: any = [
        `${paths.tmp.dir}/**/*.css`,
    ]

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        return this.gulp
        .src(this.files)
        .pipe(plumber())
        .pipe(tpl.modifyFile())
        .pipe(this.gulp.dest(paths.build.dir))
    }
}

new TaskFile()
