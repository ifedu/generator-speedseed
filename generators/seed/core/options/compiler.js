'use strict'

module.exports = {
    getExtCompiler($) {
        const ext =  {
            babeljs: 'js',
            coffeescript: 'coffee',
            typescript: 'ts'
        }

        return ext[$.yo.compiler]
    },

    getPluginCompiler($) {
        const plugins =  {
            babeljs: () => require('gulp-babel')({ presets: ['es2015'] }),
            coffeescript: () => require('gulp-coffee')(),
            typescript: () => require('gulp-typescript')({
                experimentalDecorators: true
            })
        }

        return plugins[$.yo.compiler]()
    }
}