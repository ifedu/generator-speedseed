import * as run from 'run-sequence'
import * as watch from 'glob-watcher'

import { paths, Task } from 'root/core/seed'

const ignoreFiles: any = [
    `!${paths.src.assets.files}`,
]

class Watch {
    css() {
        watch([
            `${paths.src.dir}/**/*.${paths.yo.cssExtra}`,
            ...ignoreFiles,
        ], {}, (cb: any) => run(
            'css.src-to-tmp',
            'copy.css.tmp-to-build',
            'js.src-to-tmp',
            cb,
        ))
    }

    html() {
        watch([
            `${paths.src.dir}/**/*.${paths.yo.htmlExtra}`,
            ...ignoreFiles,
        ], {}, (cb: any) => run(
            'html.src-to-tmp',
            'copy.html.tmp-to-build',
            'js.src-to-tmp',
            cb,
        ))
    }

    js() {
        this.jsFile([`${paths.src.dir}/**/*.js`])
        this.jsFile([`${paths.src.dir}/**/*.jsx`])
        this.jsFile([`${paths.src.dir}/**/*.${paths.yo.jsExtra}`])
    }

    modifyCss() {
        watch([
            `${paths.src.dir}/**/*.css`,
            ...ignoreFiles,
        ], {}, (cb: any) => run(
            'modify.css.src-to-tmp',
            [
                'copy.css.tmp-to-build',
                'js.src-to-tmp',
            ],
            cb,
        ))
    }

    modifyHtml() {
        watch([
            `${paths.src.dir}/**/*.html`,
            ...ignoreFiles,
        ], {}, (cb: any) => run(
            'modify.html.src-to-tmp',
            [
                'copy.html.tmp-to-build',
                'js.src-to-tmp',
            ],
            cb,
        ))
    }

    private jsFile(files: any) {
        watch([
            ...files,
            ...ignoreFiles,
        ], {}, (cb: any) => run(
            'js.src-to-tmp',
            cb
        ))
    }
}

class TaskFile extends Task {
    w: any = new Watch()

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        this.w.css()
        this.w.html()
        this.w.js()
        this.w.modifyCss()
        this.w.modifyHtml()

        cb()
    }
}

new TaskFile()
