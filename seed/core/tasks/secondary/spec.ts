import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        const karma = require('karma')
        const options = require('root/core/karma.conf')

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
