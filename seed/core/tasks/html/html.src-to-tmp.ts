import * as plumber from 'gulp-plumber'

import { core, paths, tpl, Task } from 'root/core/seed'

class TaskFile extends Task {
    private html: any

    private files: any = [
        `${paths.src.dir}/**/*.${paths.yo.htmlExtra}`,
    ]

    constructor() {
        super(__filename)

        this.html = (!core.args.dist)
            ? this.getPluginHtml()
            : this.getPluginHtmlMin()
    }

    protected init(cb: any) {
        if (!paths.yo.htmlExtra) cb()

        return this.gulp
        .src(this.files)
        .pipe(plumber())
        .pipe(tpl.modifyFile())
        .pipe(this.html())
        .pipe(this.gulp.dest(paths.tmp.dir))
    }

    private getPluginHtml() {
        const plugins: any =  {
            pug: () => require('gulp-pug')(paths.html.pug),
        }

        return plugins[paths.yo.html]
    }

    private getPluginHtmlMin() {
        const plugins: any =  {
            pug: () => require('gulp-pug')(paths.htmlDist.pug),
        }

        return plugins[paths.yo.html]
    }
}

new TaskFile()
