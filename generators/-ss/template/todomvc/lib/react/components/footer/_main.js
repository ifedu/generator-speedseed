'use strict'

const fs = require('fs')

module.exports = {
    footer: {
        clearButton: fs.readFileSync('./dev/components/footer/clearButton/---main.html'),
        render: fs.readFileSync('./dev/components/footer/render/---main.html')
    }
}