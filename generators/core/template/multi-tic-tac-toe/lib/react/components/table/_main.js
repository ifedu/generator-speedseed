const fs = require('fs')

module.exports = {
    table: {
        render: fs.readFileSync('./dev/components/table/render/---main.html'),

        main: fs.readFileSync('./dev/components/table/main/---main.html')
    }
}