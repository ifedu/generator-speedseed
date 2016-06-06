'use strict'

const config = require('../_config.js')

module.exports = require('yeoman-generator').Base.extend({
    paths() {
        config.paths.call(this)
    },

    prompting() {
        const done = this.async()

        config.prompting.call(this, {
            message: 'Component Name?',
            name: 'component',
            type: 'input'
        }, done)
    },

    writing() {
        const create = config.create.bind(this)

        create(`seed/template/multi-tic-tac-toe/${this.config.get('framework')}/compiler/all/component`, `./app/components/${this.config.get('component')}`)
        create(`seed/template/multi-tic-tac-toe/${this.config.get('framework')}/compiler/all/component/.*`, `./app/components/${this.config.get('component')}`)

        create(`seed/template/multi-tic-tac-toe/${this.config.get('framework')}/compiler/${this.config.get('compiler')}/component`, `./app/components/${this.config.get('component')}`)
        create(`seed/template/multi-tic-tac-toe/${this.config.get('framework')}/compiler/${this.config.get('compiler')}/component/.*`, `./app/components/${this.config.get('component')}`)

        create(`seed/template/multi-tic-tac-toe/${this.config.get('framework')}/css/${this.config.get('css')}/component`, `./app/components/${this.config.get('component')}`)
        create(`seed/template/multi-tic-tac-toe/${this.config.get('framework')}/css/${this.config.get('css')}/component/.*`, `./app/components/${this.config.get('component')}`)
    }
})