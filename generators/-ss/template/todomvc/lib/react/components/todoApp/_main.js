'use strict'

const fs = require('fs')

module.exports = {
    todoApp: {
        header: fs.readFileSync('./dev/components/todoApp/header/---main.html'),
        render: fs.readFileSync('./dev/components/todoApp/render/---main.html'),
        section: fs.readFileSync('./dev/components/todoApp/section/---main.html'),
        todoFooter: fs.readFileSync('./dev/components/todoApp/todoFooter/---main.html'),
        todoItems: fs.readFileSync('./dev/components/todoApp/todoItems/---main.html')
    }
}