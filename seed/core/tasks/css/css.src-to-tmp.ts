import { core, paths, tpl, Task } from 'root/core/seed'

class TaskFile extends Task {
    private css: any

    private files: any = [
        `${paths.src.dir}/**/*.${paths.yo.cssExtra}`,
    ]

    constructor() {
        super(__filename)

        this.css = (!core.args.dist)
            ? this.getPluginCss()
            : this.getPluginCssMin()
    }

    protected init(cb: any) {
        return this.gulp
        .src(this.files)
        .pipe(tpl.modifyFile())
        .pipe(this.css())
        .on('error', cb)
        .pipe(this.gulp.dest(paths.tmp.dir))
    }

    private getPluginCss() {
        const plugins: any =  {
            less: () => require('gulp-less')(paths.styles.less),
            sass: () => require('gulp-sass')(paths.styles.sass),
            scss: () => require('gulp-sass')(paths.styles.scss),
            stylus: () => require('gulp-stylus')(paths.styles.styl)
        }

        return plugins[paths.yo.css]
    }

    private getPluginCssMin() {
        const plugins: any =  {
            less: () => require('gulp-less')(paths.stylesDist.less),
            sass: () => require('gulp-sass')(paths.stylesDist.sass),
            scss: () => require('gulp-sass')(paths.stylesDist.scss),
            stylus: () => require('gulp-stylus')(paths.stylesDist.styl)
        }

        return plugins[paths.yo.css]
    }
}

new TaskFile()
