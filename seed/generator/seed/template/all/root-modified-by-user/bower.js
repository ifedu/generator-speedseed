module.exports = ($) => {
    const speedseed = require('speedseed')
    const file = new speedseed.Files()

    const optionsGeneral = {
        name: `${$.general.project} with ${$.user.template}`,
        private: true,

        dependencies: {}
    }

    file.extendFromUser(optionsGeneral, './bower.json')
    file.extendFromOptions($, optionsGeneral.dependencies, {
        framework: {
            polymer: {
                'Polymer': '1.7.0'
            }
        }
    })

    file.writeFile('bower.json', optionsGeneral, 2)
}