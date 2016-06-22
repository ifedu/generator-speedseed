module.exports = function () {
    const $ = require('../../_config.js')

    $.updateFile('bower.json', 2, {
        name: this.config.get('project'),
        private: true,

        dependencies: {
        }
    })
}