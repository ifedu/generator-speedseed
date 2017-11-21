import { mergeWith } from 'lodash'
import * as webpack from 'webpack'

import { core, paths, webpackOptions, Task } from 'root/core/seed'

class TaskFile extends Task {
    private cb: any
    private pack: any = require('../../../package.json')

    private packageDependencies: string[] = (paths.bundle.vendor.includePackageDependencies)
        ? Object.keys(this.pack.dependencies)
        : []

    private specDependencies: string[] = (core.args.spec)
        ? paths.bundle.dependenciesSpec
        : []

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        this.cb = cb

        webpack(
            this.getWebpackCommonOptions(),
            this.webpackCb
        )
    }

    private getWebpackCommonOptions() {
        const common: any = {
            context: this.root,

            entry: {
                'vendor': [
                    ...this.packageDependencies,
                    ...this.specDependencies,
                    ...paths.bundle.vendor.dependencies
                ],
            },

            node: {
                fs: 'empty',
            },

            output: {
                filename: '[name].js',
                path: `${this.root}/${paths.build.dir}`,
                library: '[name]',
            },


            plugins: this.getPlugins(),
        }

        if (
            !common.entry.vendor.length ||
            core.args.one
        ) return this.cb()

        mergeWith(common, webpackOptions.common, core.concatArr)

        return common
    }

    private getPlugins() {
        const plugins: any = [
            new webpack.DllPlugin({
                path: `${this.root}/${paths.build.dir}/[name].json`,
                name: '[name]',
            })
        ]

        return this.getPluginsMin(plugins)
    }

    private webpackCb = () => {
        this.cb()
    }
}

new TaskFile()
