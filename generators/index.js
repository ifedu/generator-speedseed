'use strict'

const config = require('./_config.js')

module.exports = config.base.extend({
    constructor: config.construct,
    paths: config.paths,

    prompting() {
        config.prompting([{
            default: this.config.get('projectName'),
            message: 'project name',
            name: 'projectName'
        }, {
            default: this.config.get('projectDescription'),
            message: 'project description',
            name: 'projectDescription'
        }, {
            default: this.config.get('projectVersion') || '0.1.0',
            message: 'project version',
            name: 'projectVersion'
        }])
    },

    writing() {
        // ROOT
        config.create('-ss/config.js', './-ss/config.js')
        config.create('-ss/editorconfig', './.editorconfig')
        config.create('-ss/eslintrc', './.eslintrc')
        config.create('-ss/gitignore', './.gitignore')
        config.create('-ss/gulpfile.js', './gulpfile.js')
        config.create('-ss/karma.conf', '././-ss/karma.conf')
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