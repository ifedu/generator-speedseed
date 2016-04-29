'use strict'

const config = require('./_config.js')

module.exports = config.base.extend({
    constructor: config.construct,
    paths: config.paths,

    prompting() {
        config.prompting([{
            default: 1,
            message: 'Library / Framework?',
            name: 'libraryJS',
            type: 'list',

            choices: [{
                name: 'jQuery',
                value: 'jquery'
            },{
                name: 'AngularJS',
                value: 'angularjs'
            }]
        }])
    },

    writing() {
        // ROOT
        config.create('-ss/config.js', './-ss/config.js')
        config.create('-ss/editorconfig', './.editorconfig')
        config.create('-ss/eslintrc', './.eslintrc')
        config.create('-ss/gitignore', './.gitignore')
        config.create('-ss/gulpfile.js', './gulpfile.js')
        config.create('-ss/karma.conf.js', '././-ss/karma.conf.js')
        config.create('-ss/package.json', './package.json')

        //-SS
        config.create('-ss/mixins')
        config.create('-ss/tasks')

        //DEV
        if (this.config.get('-ss_dev') !== true) {
            this.config.set('-ss_dev', true)

            config.del('dev')

            config.create('-ss/dev', './dev')
        }
    }
})