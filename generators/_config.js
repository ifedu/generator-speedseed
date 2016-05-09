'use strict'

module.exports = {
    create(fileTpl, fileDest, props) {
        fileDest = fileDest || fileTpl

        if (props === false) {
            this.fs.copy(
                this.templatePath(fileTpl),
                this.destinationPath(fileDest)
            )
        } else {
            this.fs.copyTpl(
                this.templatePath(fileTpl),
                this.destinationPath(fileDest),
                this.props
            )
        }
    },

    paths() {
        this.sourceRoot(__dirname)
    },

    prompting(prompts) {
        const done = this.async()

        this.prompt(prompts, (answers) => {
            for (let answer in answers) {
                this.config.set(answer, answers[answer])
            }

            done()
        })
    }
}