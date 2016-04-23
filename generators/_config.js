'use strict'

const config = {
    base: require('yeoman-generator').Base,

    create(fileTpl, fileDest) {
        fileDest = fileDest || fileTpl

        this.fs.copyTpl(
            this.templatePath(fileTpl),
            this.destinationPath(fileDest),
            this.props
        )
    },

    del(file) {
        this.fs.delete(file)
    },

    paths() {
        this.sourceRoot(__dirname)
    },

    prompting(prompts) {
        console.log(this.config.get('-ss').version)

        const done = this.async()

        this.prompt(prompts, (answers) => {
            this.props = answers

            this.config.set('-ss', {
                version: 'generator-speedseed version 0.2.0'
            })

            for (let answer in answers) {
                this.config.set(answer, answers[answer])
            }

            done()
        })
    },

    props: {}
}

config.construct = function () {
    config.create = config.create.bind(this)
    config.del = config.del.bind(this)
    config.paths = config.paths.bind(this)
    config.prompting = config.prompting.bind(this)

    config.base.apply(this, arguments)
}

module.exports = config