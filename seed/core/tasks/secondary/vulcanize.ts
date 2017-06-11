import * as htmlmin from 'gulp-htmlmin'
import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    private files: any = [
        `${paths.build.dir}/main.html`,
    ]

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        const minifyInline = require('gulp-minify-inline')
        const vulcanize = require('gulp-vulcanize')

        return this.gulp
        .src(this.files)
        .pipe(vulcanize({
            inlineCss: true,
            inlineScripts: true,
            stripComments: true
        }))
        .pipe(this.gulp.dest(paths.dist.dir))
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(minifyInline({}))
        .pipe(this.gulp.dest(paths.dist.dir))
    }
}

new TaskFile()
