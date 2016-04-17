'use strict'

const config = require('./config.js')

module.exports = config.base.extend({
    constructor: config.construct,
    paths: config.paths,

    prompting() {
        const prompts = [{
            message: 'Project Name',
            name: 'nameProject',
            type: 'input'
        }]

        config.prompting(prompts, (answer) => {
            this.config.set('moduleName', answer.moduleName)
        })
    },

    writing() {
        config.createFile('app/index.html', `app/index.html`)
    }
})