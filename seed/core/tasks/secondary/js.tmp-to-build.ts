import { lstatSync } from 'fs'
import * as modifyFile from 'gulp-modify-file'
import * as plumber from 'gulp-plumber'
import * as rename from 'gulp-rename'
import { merge } from 'lodash'
import { basename, dirname, join, sep } from 'path'
import * as webpack from 'webpack'

import { core, paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    private cb: any
    private routeFiles: any = []
    private isCB: boolean

    private files: any = [
        `${paths.tmp.dir}/**/${paths.starterFiles.index}.js`,
        `${paths.tmp.dir}/**/${paths.starterFiles.main}.js`,

        `${paths.tmp.dir}/**/${paths.starterFiles.index}.jsx`,
        `${paths.tmp.dir}/**/${paths.starterFiles.main}.jsx`,

        `${paths.tmp.dir}/**/${paths.starterFiles.index}.${paths.yo.jsExtra}`,
        `${paths.tmp.dir}/**/${paths.starterFiles.main}.${paths.yo.jsExtra}`,
    ]

    constructor() {
        super(__filename)

        this.files = (core.args.spec)
            ? [
                ...this.files,
                `${paths.tmp.dir}/**/*.spec.js`,
                `${paths.tmp.dir}/**/*.spec.jsx`,
                `${paths.tmp.dir}/**/*.spec.${paths.yo.jsExtra}`,
            ]
            : [
                ...this.files,
                `!${paths.tmp.dir}/**/*.spec*`,
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
        const common = this.getWebpackCommonOptions()

        if (core.args.dev) {
            merge(common, this.getWebpackDevOptions())
        }

        if (core.args.dist) {
            merge(common, this.getWebpackDistOptions())
        }

        return common
    }

    private getWebpackCommonOptions() {
        return {
            entry: this.getEntry(),
            output: {
                filename: '[name].js',
                path: `${this.root}/${paths.build.dir}`,
            },

            context: this.root,

            module: {
                rules: [
                    {
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        test: /\.(js|jsx)$/
                    }, {
                        exclude: /node_modules/,
                        loader: 'coffeescript-loader',
                        test: /\.coffee$/
                    }, {
                        exclude: /node_modules/,
                        loader: 'ts-loader',
                        test: /\.ts$/,

                        options: {
                            silent: true,
                        },
                    }
                ],
            },

            node: {
                fs: 'empty',
            },

            plugins: this.getPlugins(),

            resolve: {
                modules: ['node_modules'],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            },
        }
    }

    private getWebpackDevOptions() {
        return {
            devtool: 'cheap-module-eval-source-map',
            watch: true,
        }
    }

    private getWebpackDistOptions() {
        return {}
    }

    private getPlugins() {
        if (core.args.one) return []

        const plugins: any = [
            new webpack.optimize.CommonsChunkPlugin({
                filename: 'commons.js',
                name: 'commons'
            }),
        ]

        const route = `${this.root}/${paths.tmp.vendor.dll}`

        try {
            const stats = lstatSync(route)

            plugins.push(
                new webpack.DllReferencePlugin({
                    context: this.root,
                    manifest: require(route),
                })
            )
        } catch(e) {}

        return this.getPluginsMin(plugins)
    }

    private getEntry() {
        const entry = {}

        this.routeFiles.forEach(this.getEntryEach.bind(this, entry))

        return entry
    }

    private getEntryEach(entry: any, routeFile: string, i: number) {
        const val = routeFile
                    .replace(this.root, '')
        const prop = val
                    .replace(paths.tmp.dir, '')
                    .replace('.jsx', '')
                    .replace('.tsx', '')
                    .replace(`.${paths.yo.jsExtra}`, '')
                    .replace('.js', '')
                    .substring(2)

        entry[prop] = `.${val}`
    }

    private webpackCb = (err: any, stats: any) => {
        if (err) console.log(err)

        if (!this.isCB) {
            this.isCB = true

            this.cb()
        }

        if (Task.watch) {
            return this.gulp.start('watch.js')
        }
    }
}

new TaskFile()
