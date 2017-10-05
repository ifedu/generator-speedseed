import * as webpack from 'webpack'

import { core, paths, Task } from 'root/core/seed'

const pack: any = require('../../../package.json')

const packageDependencies: string[] = (paths.bundle.vendor.includePackageDependencies)
    ? Object.keys(pack.dependencies)
    : []

const specDependencies: string[] = (core.args.spec)
    ? paths.bundle.dependenciesSpec
    : []

class TaskFile extends Task {
    webpackOptions = {
        entry: {
            'vendor': [
                ...packageDependencies,
                ...specDependencies,
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

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        if (
            !this.webpackOptions.entry.vendor.length ||
            core.args.one
        ) return cb()

        webpack(this.webpackOptions, this.finish.bind(this, cb))
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

    private finish(cb: any) {
        cb()
    }
}

new TaskFile()
