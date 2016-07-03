module.exports = (data) => {
    const speedseed = require('speedseed')

    const file = new speedseed.Files()

    file.updateFile('bower.json', 2, {
        name: data.project,
        private: true,

        dependencies: {
        }
    })
}