import { Task } from 'root/core/seed'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        this.run(
            'clean',
            [
                'bundle',
                'css.src-to-tmp',
                'html.src-to-tmp',
                'modify.css.src-to-tmp',
                'modify.html.src-to-tmp',
            ],
            'js.src-to-tmp',
            [
                'copy.css.tmp-to-build',
                'copy.html.tmp-to-build',
                'js.tmp-to-build',
            ],
            cb
        )
    }
}

new TaskFile()
