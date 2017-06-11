import { paths, Task } from 'root/core/seed'

import options from 'root/core/karma.conf'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        const karma = require('karma')

        const server = new karma.Server(
            options,
            this.finish.bind(this, cb)
        )

        server.start()

        cb()
    }

    private finish(cb: any) {}
}

new TaskFile()
