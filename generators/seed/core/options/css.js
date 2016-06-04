'use strict'

module.exports = {
    getPluginCss($) {
        const plugins =  {
            less: () => require('gulp-less')($.config.less),
            sass: () => require('gulp-sass')($.config.sass),
            scss: () => require('gulp-sass')($.config.scss),
            styl: () => require('gulp-styl')($.config.styl)
        }

        return plugins[$.yo.css]
    }
}