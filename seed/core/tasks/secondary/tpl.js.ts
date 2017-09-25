import * as modifyFile from 'gulp-modify-file'
import * as plumber from 'gulp-plumber'
import { template } from 'lodash'
import { basename, dirname, sep } from 'path'

import { core, paths, tpl, Task } from 'root/core/seed'

class TaskFile extends Task {
    private files: any = [
        `${paths.build.dir}/**/*.js`,
        `${paths.build.dir}/**/*.jsx`,
        `${paths.build.dir}/**/*.${paths.yo.jsExtra}`,

        `!${paths.build.assets.files}`,
        `!${paths.build.vendor.file}`,
    ]

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        this.gulp
        .src(this.files)
        .pipe(plumber())
        .pipe(modifyFile((content: string, route: string) => {
            return content.replace(/\/\*\[|\]\*\//g, '')
        }))
        .pipe(this.gulp.dest(`${paths.tmp.dir}/-tmp`))
        .on('end', () => {
            this.gulp
            .src(`${paths.tmp.dir}/-tmp/**/*`)
            .pipe(this.gulp.dest(paths.build.dir))
            .on('end', () => cb())
        })
    }
}

new TaskFile()
