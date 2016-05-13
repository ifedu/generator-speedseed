'use strict'

const fs = require('fs')

module.exports = {
    todoItem: {
        render: fs.readFileSync('./dev/components/todoItem/render/---main.html')
    }
}