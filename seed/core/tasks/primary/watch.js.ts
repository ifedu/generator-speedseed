import * as gulp from 'gulp'

import { Task } from 'root/core/seed'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        this.run(
            'tpl.js',
            'reload',
            cb
        )
    }
}

new TaskFile()
