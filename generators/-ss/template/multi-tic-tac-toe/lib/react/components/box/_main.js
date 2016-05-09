const fs = require('fs')

module.exports = {
    box: {
        render: fs.readFileSync('./dev/components/box/render/---main.html'),

        main: fs.readFileSync('./dev/components/box/main/---main.html')
    }
}