import * as webpack from 'webpack'

import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    pack: any = require('../../../package.json')

    webpackOptions = {
        entry: {
            'vendor': Object.keys(this.pack.dependencies),
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
        if (!this.webpackOptions.entry.vendor.length) return cb()

        webpack(this.webpackOptions, this.finish.bind(this, cb))
    }

    private getPlugins() {
        const plugins: any = [
            new webpack.DllPlugin({
                path: `${this.root}/${paths.tmp.dir}/[name].json`,
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
