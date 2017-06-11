import * as cssmin from 'gulp-cssmin'

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
        return this.gulp
        .src(this.files)
        .pipe(cssmin({}))
        .pipe(this.gulp.dest(paths.dist.dir))
    }
}

new TaskFile()
