module.exports = () => {
    const request = require('sync-request')

    const choices = [
        { name: 'generator-speedseed-multi-tic-tac-toe', value: 'multi-tic-tac-toe' },
        { name: 'generator-speedseed-cleanly-angular2-tour-of-heroes', value: 'cleanly-angular2-tour-of-heroes' },
        { name: 'generator-speedseed-cleanly-polymer-get-started', value: 'cleanly-polymer-get-started' },
    ]

    const isGeneratorSpeedseed = () => (choice.name === `generator-${data.name}`)

    const isNotBlackList = (name) => {
        if (name === 'generator-speedseed-angular2-whitespace') return false
        if (name === 'generator-speedseed-polymer-whitespace') return false

        return true
    }

    try {
        const res = request('GET', 'https://storage.googleapis.com/generators.yeoman.io/cache.json')

        const CHARACTERS_TEMPLATING = 'speedseed-'
        const CHARACTERS_TEMPLATING_LENGTH = 'speedseed-'.length

        const searchGeneratorsIncludes = (data) => {
            let isFinded = false

            for (let choice of choices) {
                if (isGeneratorSpeedseed() && isNotBlackList(choice.name)) {
                    isFinded = true
                }
            }

            return isFinded
        }

        const checkGeneratorSpeedSeed = (data) => {
            const FIRST_CHARACTERS_DATA = data.name.substring(0, CHARACTERS_TEMPLATING_LENGTH)

            if ((FIRST_CHARACTERS_DATA === CHARACTERS_TEMPLATING) &&
                (searchGeneratorsIncludes(data) === false)) {
                choices.push({
                    name: `generator-${data.name}`,
                    value: data.name.substring(10)
                })
            }
        }

        for (let data of JSON.parse(res.getBody('utf8'))) {
            checkGeneratorSpeedSeed(data)
        }
    } catch (e) {}

    return choices
}