import { existsSync } from 'fs'
import * as modifyFile from 'gulp-modify-file'
import * as plumber from 'gulp-plumber'
import { mergeWith } from 'lodash'
import { extname } from 'path'
import * as webpack from 'webpack'

import { core, paths, tpl, webpackOptions, Task } from 'root/core/seed'

class TaskFile extends Task {
    private cb: any
    private isFirstCB: boolean
    private routeFiles: any = []

    private files: any = [
        ...paths.src.files.main,
        `!${paths.src.assets.files}`,
    ]

    constructor() {
        super(__filename)

        const unitTestAll: any = (core.args.spec)
            ? paths.src.files.unitTestAll
            : `!${paths.src.files.unitTestAll}`

        this.files = [
            ...this.files,
            unitTestAll
        ]
    }

    protected init(cb: any) {
        this.cb = cb

        this.gulp
        .src(this.files)
        .pipe(plumber())
        .pipe(modifyFile(this.modifyFile))
        .on('finish', this.finish)
    }

    private modifyFile = (content: string, route: string) => {
        this.routeFiles.push(route)
    }

    private finish = () => {
        webpack(
            this.getWebpackOptions(),
            this.webpackCb
        )
    }

    private getWebpackOptions(): any {
        const common: any = this.getWebpackCommonOptions()

        if (core.args.dev) {
            mergeWith(common, webpackOptions.dev, core.concatArr)
        }

        if (core.args.dist) {
            mergeWith(common, webpackOptions.dist, core.concatArr)
        }

        return common
    }

    private getWebpackCommonOptions() {
        const common: any = {
            context: this.root,
            entry: this.getEntry(),

            output: {
                filename: '[name].js',
                path: `${this.root}/${paths.build.dir}`,
            },

            plugins: this.getPlugins(),
        }

        if (core.args.electron) {
            common.target = 'electron-renderer'
        }

        mergeWith(common, webpackOptions.common, core.concatArr)

        return common
    }

    private getPlugins() {
        if (core.args.one) return []

        const plugins: any = [
            new webpack.optimize.CommonsChunkPlugin({
                filename: 'commons.js',
                name: 'commons'
            }),
        ]

        this.addPlugin(plugins, `${this.root}/${paths.build.vendor.dll}`)

        return this.getPluginsMin(plugins)
    }

    private addPlugin(plugins: any, route: string) {
        const exist = existsSync(route)

        if (exist) {
            plugins.push(
                new webpack.DllReferencePlugin({
                    context: this.root,
                    manifest: require(route),
                })
            )
        }
    }

    private getEntry() {
        const entry = {}

        this.routeFiles.forEach(this.getEntryEach.bind(this, entry))

        return entry
    }

    private getEntryEach(entry: any, routeFile: string, i: number) {
        const val = routeFile.replace(this.root, '')
        const ext = extname(val)
        const prop = val
                    .replace(paths.src.dir, '')
                    .replace(ext, '')
                    .substring(2)

        entry[prop] = `.${val}`
    }

    private webpackCb = (err: any, stats: any) => {
        if (err) console.log(err)
        if (stats.hasErrors()) console.log(stats.toString({colors: true, reasons: true}))

        if (!this.isFirstCB) {
            this.isFirstCB = true

            this.cb()
        }

        if (Task.reload) {
            return this.gulp.start('reload')
        }
    }
}

new TaskFile()
