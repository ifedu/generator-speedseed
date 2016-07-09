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
            babeljs: () => require('gulp-babel')(),
            coffeescript: () => require('gulp-coffee')(),
            typescript: () => require('gulp-typescript')(require('../../tsconfig.json').compilerOptions)
        }

        return plugins[$.yo.compiler]()
    }
}