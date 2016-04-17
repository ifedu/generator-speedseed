'use strict'

const config = {
    base: require('yeoman-generator').Base,

    createFile(fileOrig, fileDest, props) {
        props = props || {}

        this.fs.copyTpl(
            this.templatePath(fileOrig),
            this.destinationPath(fileDest), {
                nameProject: this.props.nameProject
            }
        )
    },

    paths() {
        this.sourceRoot(__dirname)
    },

    prompting(prompts, fn) {
        const done = this.async()

        this.prompt(prompts, (answers) => {
            // this.log(answers.name)
            this.props = answers

            if (fn !== undefined) {
                fn(answers)
            }

            this.props.moduleName = this.config.get('moduleName')

            done()
        })
    }
}

config.construct = function () {
    config.createFile = config.createFile.bind(this)
    config.paths = config.paths.bind(this)
    config.prompting = config.prompting.bind(this)

    config.base.apply(this, arguments)
}

module.exports = config