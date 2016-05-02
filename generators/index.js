'use strict'

const config = require('./_config.js')

module.exports = config.base.extend({
    constructor: config.construct,
    paths: config.paths,

    prompting() {
        config.prompting([{
            default: 0,
            message: 'Template?',
            name: 'template',
            type: 'list',

            choices: [{
                name: 'No',
                value: 'no'
            }, {
                name: 'multi-tic-tac-toe',
                value: 'multi-tic-tac-toe'
            }]
        }, {
            default: 0,
            message: 'Library / Framework?',
            name: 'libraryJS',
            type: 'list',

            choices: [{
                name: 'AngularJS',
                value: 'angularjs'
            }, {
                name: 'jQuery',
                value: 'jquery'
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
        if (this.config.get('template') !== 'no') {
            config.create('-ss/dev', './dev')
            config.create(`-ss/${this.config.get('libraryJS')}`, './dev')
        }
    }
})