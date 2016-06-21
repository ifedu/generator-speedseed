'use strict'

module.exports = {
    ext: {
        babeljs: '.js',
        coffeescript: '.coffee',
        typescript: '.ts'
    },

    create(fileTpl, fileDest, option) {
        const copy = (option === false) ? 'copy' : 'copyTpl'
        const options = (option === false) ? { globOptions: { dot: true } } : this.config.getAll()

        this.fs[copy](
            this.templatePath(fileTpl),
            this.destinationPath(fileDest),
            options
        )

        if (option === true) {
            this.fs[copy](
                this.templatePath(`${fileTpl}/**/.*`),
                this.destinationPath(fileDest),
                options
            )
        }
    },

    del(file, fn) {
        require('del')(file, {
            force: true
        })
        .then(() => {
            fn()
        })
    },

    paths() {
        this.sourceRoot(__dirname)
    },

    prompting(done, prompts) {
        this.prompt(prompts, (answers) => {
            for (let answer in answers) {
                this.config.set(answer, answers[answer])
            }

            done()
        })
    },

    updateFile(fileCore, config) {
        const extend = require('extend')
        const fs = require('fs')

        const file = (fs.existsSync(`./${fileCore}`) === true)
            ? JSON.parse(fs.readFileSync(`./${fileCore}`, 'utf8'))
            : {}

        extend(true, config, file)

        fs.writeFileSync(fileCore, JSON.stringify(config, null, 2))
    }
}