'use strict'

const config = require('./_config.js')

module.exports = config.base.extend({
    constructor: config.construct,
    paths: config.paths,

    prompting() {
        config.prompting([{
            message: 'project name',
            name: 'projectName',
            store: true
        }, {
            message: 'project description',
            name: 'projectDescription',
            store: true
        }])
    },

    writing() {
        config.del('-ss')
        config.del('dev')

        config.create('-noname/eslintrc', './.eslintrc')
        config.create('-noname/gitignore', './.gitignore')

        config.create('-root', './')

        config.create('-ss')
    }
})