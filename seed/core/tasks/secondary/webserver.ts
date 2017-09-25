import * as browserSync from 'browser-sync'
import * as historyApiFallback from 'connect-history-api-fallback'

import { core, paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    cb:any
    sync: any = browserSync.create()

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        this.cb = cb

        Task.reload = this.sync.reload

        const { dirRelative, dir } = paths.src.assets

        let baseDir = paths.build.dir
        let routes = {
            [`/${dirRelative}`]: dir
        }

        if (core.args.dist) {
            baseDir = paths.dist.dir
            routes = {}
        }

        this.sync.init(
            this.getSyncInit(baseDir, routes),
            this.cbCreateServer
        )
    }

    private getSyncInit(baseDir: string, routes: any): any {
        return {
            localOnly: true,
            open: (core.args.open),
            port: paths.server.portBuild,

            server: {
                baseDir,
                routes,

                middleware: [
                    historyApiFallback({
                        index: '/index.html'
                    })
                ]
            },

            ui: {
                port: paths.server.portReload
            }
        }
    }

    private cbCreateServer = () => {
        this.cb()
    }
}

new TaskFile()
