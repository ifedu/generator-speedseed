import * as modifyFile from 'gulp-modify-file'
import * as plumber from 'gulp-plumber'

import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    private files: any = [
        ...paths.build.files.js,
        `!${paths.build.assets.files}`,
    ]

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        const noCache = paths.build.cache.map((cache: string) => `!${cache}`)
        this.files = [...this.files, ...noCache]

        this.gulp
        .src(this.files)
        .pipe(plumber())
        .pipe(modifyFile((content: string, route: string) => {
            return content.replace(/\/\*\[|\]\*\//g, '')
        }))
        .pipe(this.gulp.dest(`${paths.tmp.dir}`))
        .on('end', () => {
            this.gulp
            .src(`${paths.tmp.dir}/**/*`)
            .pipe(this.gulp.dest(paths.build.dir))
            .on('end', () => {
                cb()

                if (Task.reload) {
                    this.gulp.start('reload')
                }
            })
        })
    }
}

new TaskFile()
