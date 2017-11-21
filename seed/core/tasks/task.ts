import * as gulp from 'gulp'
import { sync } from 'del'
import { readdirSync } from 'fs'
import { basename, join } from 'path'
import * as run from 'run-sequence'
import * as webpack from 'webpack'

import { core } from 'root/core/seed'

export default class Task {
    protected gulp: any = gulp
    protected root: any = process.cwd()
    protected run: any = run

    static reload: any
    static watch: any

    constructor(filename: string) {
        const name: string = this.getNameFile(filename)

        gulp.task(name, this.init.bind(this))
    }

    protected deleteFiles(files: any, cb: any) {
        sync(files, { force: true })

        cb()
    }

    protected getPluginsMin(plugins: any) {
        if (core.args.dist) {
            plugins = [
                ...plugins,
                new webpack.optimize.UglifyJsPlugin(),
            ]
        }

        return plugins
    }

    protected init(cb: any) {}

    private getNameFile(fileName: string, ext = '.ts') {
        return basename(fileName, ext)
    }

    static readTasks(dir: string) {
        const absoluteRoute = join(__dirname, dir)

        readdirSync(absoluteRoute)
        .forEach(this.readTaskEach.bind(this, absoluteRoute))
    }

    private static readTaskEach(absoluteRoute: string, file: string) {
        require(`${absoluteRoute}/${file}`)
    }
}
