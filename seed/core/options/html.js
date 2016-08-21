module.exports = {
    getPluginHtml($) {
        const plugins =  {
            jade: () => require('gulp-jade')($.config.html)
        }

        return plugins[$.yo.html]
    }
}