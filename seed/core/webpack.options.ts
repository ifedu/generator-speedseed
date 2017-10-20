import * as ExtractTextPlugin from 'extract-text-webpack-plugin'
import { template } from 'lodash'
import { resolve } from 'path'

import { core, tpl, paths } from 'root/core/seed'

const cssLoader = { loader: 'css-loader' }
const htmlLoader = { loader: 'html-loader',
    options: {
        attrs: false,
    }
}
const rawLoader = { loader: 'raw-loader' }
const styleLoader = { loader: 'style-loader' }

const pugLoader = {
    loader: 'pug-html-loader',
    options: {
        doctype: 'html',
        pretty: true,
    },
}

const lessLoader = {
    loader: 'less-loader',
    options: { compress: false }
}

const sassLoader = {
    loader: 'sass-loader',
    options: { outputStyle: '' }
}

const stylusLoader = {
    loader: 'stylus-loader',
    options: { compress: false, linenos: true }
}

const exclude = /node_modules/

export default class WebpackOptionsCore {
    private extractCss: any = new ExtractTextPlugin({ filename: '[name].css' })
    private extractHtml: any = new ExtractTextPlugin({ filename: '[name].html' })

    // JS
    babelLoader: any = {
        exclude,
        test: /\.(js|jsx)$/,

        use: [
            { loader: 'babel-loader'},
            this.preModifyLoader(/\/\*\</, /\>\*\//),
        ],
    }

    coffeeLoader: any = {
        exclude,
        test: /\.(coffee)$/,

        use: [
            { loader: 'coffeescript-loader'},
            this.preModifyLoader(/\/\*\</, /\>\*\//),
        ],
    }

    tsLoader: any = {
        exclude,
        test: /\.(ts)$/,

        use: [
            { loader: 'ts-loader', options: {silent: true}},
            this.preModifyLoader(/\/\*\</, /\>\*\//),
        ],
    }

    // HTML
    htmlLoader: any = {
        exclude,
        test: /^(?!.*(index|main))([s\S]+\.(html))$/,
        use: [
            htmlLoader,
            this.preModifyLoader(/\<\!\-\-\</, /\>\-\-\>/),
        ]
    }

    htmlLoaderMain: any = {
        exclude,
        test: /(main|index)\.(html)$/,

        use: this.extractHtml.extract({
            use: [
                htmlLoader,
                this.preModifyLoader(/\<\!\-\-\</, /\>\-\-\>/),
            ]
        })
    }

    pugLoader: any = {
        exclude,
        test: /^(?!.*(index|main))([s\S]+\.(pug))$/,

        use: [
            rawLoader,
            pugLoader,
            this.preModifyLoader(/\/\/\</, /\>\/\//),
        ]
    }

    pugLoaderMain: any = {
        exclude,
        test: /(main|index)\.(pug)$/,

        use: this.extractHtml.extract({
            use: [
                htmlLoader,
                pugLoader,
                this.preModifyLoader(/\/\/\</, /\>\/\//),
            ]
        })
    }

    // CSS
    cssLoader: any = {
        exclude,
        test: /^(?!.*(index|main))([s\S]+\.(css))$/,

        use: [
            rawLoader,
            cssLoader,
            this.preModifyLoader(/\/\*\</, /\>\*\//),
        ]
    }

    cssLoaderMain: any = {
        exclude,
        test: /(main|index)\.(css)$/,

        use: this.extractCss.extract({
            use: [
                cssLoader,
                this.preModifyLoader(/\/\*\</, /\>\*\//),
            ]
        })
    }

    lessLoader: any = {
        exclude,
        test: /^(?!.*(index|main))([s\S]+\.(less))$/,

        use: [
            rawLoader,
            lessLoader,
            this.preModifyLoader(/\/\*\</, /\>\*\//),
        ]
    }

    lessLoaderMain: any = {
        exclude,
        test: /(main|index)\.(less)$/,

        use: this.extractCss.extract({
            use: [
                cssLoader,
                lessLoader,
                this.preModifyLoader(/\/\*\</, /\>\*\//),
            ]
        })
    }

    sassLoader: any = {
        exclude,
        test: /^(?!.*(index|main))([s\S]+\.(sass|scss))$/,

        use: [
            rawLoader,
            sassLoader,
            this.preModifyLoader(/\/\*\</, /\>\*\//),
        ]
    }

    sassLoaderMain: any = {
        exclude,
        test: /(main|index)\.(sass|scss)$/,

        use: this.extractCss.extract({
            use: [
                cssLoader,
                sassLoader,
                this.preModifyLoader(/\/\*\</, /\>\*\//),
            ]
        })
    }

    stylusLoader: any = {
        exclude,
        test: /^(?!.*(index|main))([s\S]+\.(styl))$/,

        use: [
            rawLoader,
            stylusLoader,
            this.preModifyLoader(/\/\*\</, /\>\*\//),
        ]
    }

    stylusLoaderMain: any = {
        exclude,
        test: /(main|index)\.(styl)$/,

        use: this.extractCss.extract({
            use: [
                cssLoader,
                stylusLoader,
                this.preModifyLoader(/\/\*\</, /\>\*\//),
            ]
        })
    }

    options: any = {
        common: {
            module: {
                rules: [
                    this.babelLoader,
                    this.coffeeLoader,
                    this.tsLoader,

                    this.htmlLoader,
                    this.htmlLoaderMain,
                    this.pugLoader,
                    this.pugLoaderMain,

                    this.cssLoader,
                    this.cssLoaderMain,
                    this.lessLoader,
                    this.lessLoaderMain,
                    this.sassLoader,
                    this.sassLoaderMain,
                    this.stylusLoader,
                    this.stylusLoaderMain,
                ],
            },

            plugins: [
                this.extractCss,
                this.extractHtml,
            ],

            resolve: {
                extensions: ['.css', '.html', '.js', '.jsx', '.less', '.pug', '.sass', '.scss', '.styl', '.ts', '.tsx'],
                modules: [
                    'node_modules',
                ],
            },
        },

        dev: {
            devtool: 'cheap-module-eval-source-map',
            watch: true,
        },

        dist: {

        },
    }

    private preModifyLoader(start: any, end: any) {
        const center = /([\s\S]+?)/

        const options = {
            escape: new RegExp(`${start.source}-${center.source}${end.source}`, 'g'),
            evaluate: new RegExp(`${start.source}${center.source}${end.source}`, 'g'),
            interpolate: new RegExp(`${start.source}=${center.source}${end.source}`, 'g'),
        }

        return {
            loader: 'modify-file-loader',

            options: {
                convert(content: any) {
                    tpl.context = this.context

                    return template(content, options)(tpl)
                }
            }
        }
    }
}
