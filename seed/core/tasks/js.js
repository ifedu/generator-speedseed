module.exports = ($, gulp) => {
    gulp.task('js', (cb) => {
        const changed = require('gulp-changed')
        const extend = require('extend')
        const filter = require('gulp-filter')
        const gulpif = require('gulp-if')
        const modifyFile = require('gulp-modify-file')
        const path = require('path')
        const plumber = require('gulp-plumber')
        const rename = require('gulp-rename')

        const webpack = require('webpack-stream')

        $.resetPropsHtml()

        let ngAnnotate = plumber

        const jsFiles = []
        const jsPromises = []

        try {
            ngAnnotate = require('gulp-ng-annotate')
        } catch (e) {e}

        const getRoute = (route, type) => {
            const path = require('path')

            const appDir = $.app.dir.substring(2)
            const typeDir = $[type].dir.substring(2)

            const dirRoute = path.dirname(route)

            return dirRoute
            .replace(
                `${path.sep}${appDir}`,
                `${path.sep}${typeDir}`
            )
        }

        gulp
        .src([
            `${$.app.dir}/**/*.js`,
            `!${$.app.dir}/**/*.spec.js`,
            `!${$.app.dir}/**/_*.js`,
            `!${$.app.dir}/**/_**/**/*.js`,

            `${$.app.dir}/**/*.jsx`,
            `!${$.app.dir}/**/*.spec.jsx`,
            `!${$.app.dir}/**/_*.jsx`,
            `!${$.app.dir}/**/_**/**/*.jsx`,

            `${$.app.dir}/**/*.${$.yo.tpl['js-extra']}`,
            `!${$.app.dir}/**/*.spec.${$.yo.tpl['js-extra']}`,
            `!${$.app.dir}/**/_*.${$.yo.tpl['js-extra']}`,
            `!${$.app.dir}/**/_**/**/*.${$.yo.tpl['js-extra']}`,

            `!${$.app.copy.assets}/**/*`,
            `!${$.app.copy.vendor}/**/*`
        ])
        .pipe(gulpif($.if.notInclude, changed($.build.dir)))
        .pipe(plumber())
        // .pipe(filter($.filterProps(`${$.yo.tpl['js-extra']}`)))
        .pipe(modifyFile((content, route) => $.translateTpl(content, route, `.${$.yo.tpl['js-extra']}`)))
        .pipe(modifyFile((content, route) => {
            jsPromises.push(() => {})

            jsFiles.push({
                code: content,
                route
            })

            return content
        }))
        .pipe(gulp.dest($.tmp.dir))
        .on('finish', () => {
            Promise
            .all(jsPromises)
            .then(() => {
                let numJsFiles = 0
                if (jsFiles.length === 0) cb()

                jsFiles.forEach((jsFile) => {
                    const routeBuild = getRoute(jsFile.route, 'build')
                    const routeTmp = getRoute(jsFile.route, 'tmp')

                    gulp
                    .src(`${routeTmp}${path.sep}${path.basename(jsFile.route)}`)
                    .pipe(plumber())
                    .pipe(modifyFile(() => jsFile.code))
                    .pipe(gulpif(
                        ($.yo.tpl.framework === 'angularjs' && $.config.dist === true), ngAnnotate()
                    ))
                    .pipe(webpack({
                        module: {
                            loaders: [{
                                exclude: /node_modules/,
                                loader: 'coffee-loader',
                                test: /\.coffee$/
                            }, {
                                exclude: /node_modules/,
                                loader: 'babel-loader',
                                test: /\.js$/,

                                query: {
                                    plugins: ['transform-decorators-legacy'],
                                    presets: ['es2015', 'stage-0']
                                }
                            }, {
                                exclude: /node_modules/,
                                loader: 'babel-loader',
                                test: /\.jsx$/,

                                query: {
                                    plugins: ['transform-decorators-legacy'],
                                    presets: ['es2015', 'react', 'stage-0']
                                }
                            }, {
                                exclude: /node_modules/,
                                loader: 'ts-loader',
                                test: /\.ts$/
                            }]
                        },

                        resolve: {
                            modulesDirectories: ['node_modules'],
                            extensions: ['', '.js', '.jsx', '.ts']
                        }
                    }, null, (err, stats) => {
                        stats.chunks = false
                    }))
                    .pipe(rename((path) => path.extname = path.extname.replace('jsx', 'js').replace($.yo.tpl['js-extra'], 'js')))
                    .pipe(gulp.dest(routeBuild))
                    .on('finish', () => {
                        numJsFiles++

                        if (numJsFiles === jsFiles.length) {
                            cb()
                        }
                    })
                })
            })
        })
    })

    gulp.task('js-spec', () => {
        const changed = require('gulp-changed')
        const extend = require('extend')
        const filter = require('gulp-filter')
        const gulpif = require('gulp-if')
        const modifyFile = require('gulp-modify-file')
        const plumber = require('gulp-plumber')

        $.resetPropsHtml()

        return gulp
        .src([
            `${$.app.dir}/**/*.spec.js`,
            `${$.app.dir}/**/*.spec.jsx`,
            `${$.app.dir}/**/*.spec.${$.yo.tpl['js-extra']}`
        ])
        .pipe(plumber())
        .pipe($.options.js.getPluginCompiler($))
        .pipe(gulp.dest($.tmp.dir))
    })

    gulp.task('js-app', () => {
        const modifyFile = require('gulp-modify-file')
        const plumber = require('gulp-plumber')

        $.resetPropsHtml()

        return gulp
        .src([
            `${$.app.dir}/**/_**/**/*.js`,
            `${$.app.dir}/**/_*.js`,
            `${$.app.dir}/**/_**/**/*.jsx`,
            `${$.app.dir}/**/_*.jsx`,
            `${$.app.dir}/**/_**/**/*.${$.yo.tpl['js-extra']}`,
            `${$.app.dir}/**/_*.${$.yo.tpl['js-extra']}`
        ])
        .pipe(plumber())
        .pipe(modifyFile((content, route) => $.translateTpl(content, route, `.${$.yo.tpl['js-extra']}`)))
        // .pipe($.options.js.getPluginCompiler($))
        .pipe(gulp.dest($.tmp.dir))
    })
}