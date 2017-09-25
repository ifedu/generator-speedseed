import { Task } from 'root/core/seed'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        this.run(
            [
                'css.src-to-tmp',
                'html.src-to-tmp',
                'modify.css.src-to-tmp',
                'modify.html.src-to-tmp',
            ],
            'js.src-to-tmp',
            cb
        )
    }
}

new TaskFile()
