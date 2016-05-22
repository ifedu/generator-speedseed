'use strict'

module.exports = {
    create(fileTpl, fileDest, props) {
        if (props === false) {
            this.fs.copy(
                this.templatePath(fileTpl),
                this.destinationPath(fileDest), {
                    globOptions: {
                        dot: true
                    }
                }
            )
        } else {
            this.fs.copyTpl(
                this.templatePath(fileTpl),
                this.destinationPath(fileDest),
                this.config.getAll()
            )
        }
    },

    paths() {
        this.sourceRoot(__dirname)
    },

    prompting(prompts, done) {
        this.prompt(prompts, (answers) => {
            for (let answer in answers) {
                this.config.set(answer, answers[answer])
            }

            done()
        })
    }
}