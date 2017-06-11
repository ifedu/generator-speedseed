import * as htmlmin from 'gulp-htmlmin'

import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    private files: any = [
        `${paths.build.dir}/**/${paths.starterFiles.index}.html`,
        `${paths.build.dir}/**/${paths.starterFiles.main}.html`,
    ]

    private options: any = {
        collapseWhitespace: true,
        removeComments: true,
    }

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        return this.gulp
        .src(this.files)
        .pipe(htmlmin(this.options))
        .pipe(this.gulp.dest(paths.dist.dir))
    }
}

new TaskFile()
