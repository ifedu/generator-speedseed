import * as plumber from 'gulp-plumber'
import { basename, dirname, sep } from 'path'

import { core, paths, tpl, Task } from 'root/core/seed'

class TaskFile extends Task {
    private files: any = [
        `${paths.src.dir}/**/*.js`,
        `${paths.src.dir}/**/*.jsx`,
        `${paths.src.dir}/**/*.${paths.yo.jsExtra}`,

        `!${paths.src.assets.files}`,
    ]

    constructor() {
        super(__filename)

        const filesSpec = (core.args.spec)
            ? `${paths.src.dir}/**/*.spec*`
            : `!${paths.src.dir}/**/*.spec*`

        this.files = [
            ...this.files,
            filesSpec
        ]
    }

    protected init(cb: any) {
        if (Task.reload) {
            Task.watch = true
        }

        return this.gulp
        .src(this.files)
        .pipe(plumber())
        .pipe(tpl.modifyFile())
        .pipe(this.gulp.dest(paths.tmp.dir))
    }
}

new TaskFile()
