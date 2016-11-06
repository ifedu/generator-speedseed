module.exports = {
    getPluginCss($) {
        const plugins =  {
            less: () => require('gulp-less')($.config.less),
            sass: () => require('gulp-sass')($.config.sass),
            scss: () => require('gulp-sass')($.config.scss),
            stylus: () => require('gulp-stylus')($.config.styl)
        }

        return plugins[$.yo.tpl.css]
    },

    getPluginCssMin($) {
        const plugins =  {
            less: () => require('gulp-less')({ compress: true }),
            sass: () => require('gulp-sass')({ outputStyle: 'compressed' }),
            scss: () => require('gulp-sass')({ outputStyle: 'compressed' }),
            stylus: () => require('gulp-stylus')({ compress: true })
        }

        return plugins[$.yo.tpl.css]
    }
}