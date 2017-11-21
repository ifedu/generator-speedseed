import * as https from 'https'

export default class SearchGenerators {
    private choices: any

    constructor() {
        this.setOfficialGenerators()
        // this.searchGenerators()

        return this.choices
    }

    private setOfficialGenerators() {
        const gs = 'generator-speedseed-'

        this.choices = [
            this.getChoice(`${gs}multi-tic-tac-toe`, 'multi-tic-tac-toe'),
            // this.getChoice(`${gs}cleanly-angular2-tour-of-heroes`, 'cleanly-angular2-tour-of-heroes'),
            // this.getChoice(`${gs}cleanly-polymer-get-started`, ''),
            // this.getChoice(`${gs}cleanly-todomvc`, ''),
            // this.getChoice(`${gs}cleanly-breakouts`, '')
        ]
    }

    private getChoice = (name: any, value: any) => ({ name, value })

    private searchGenerators() {
        const yoJson: string = 'https://storage.googleapis.com/generators.yeoman.io/cache.json'

        https.get(yoJson, this.searchResp)
    }

    private searchResp = (resp: any) => {
        const obj: any = {
            data: ''
        }

        resp.on('data', this.respData.bind(this, obj))
        resp.on('end', this.respEnd.bind(this, obj))
        resp.on('error', this.respError)
    }

    private respData = (obj: any, chunk: any) => {
        obj.data += chunk
    }

    private respEnd = (obj: any) => {
        const json: any = JSON.parse(obj.data)

        for (let data of json) {
            this.checkGeneratorSpeedSeed(data)
        }
    }

    private respError(err: any) {}

    private checkGeneratorSpeedSeed(data: any) {
        if (
            this.isTplSpeedseed(data) &&
            !this.searchGeneratorsIncludes(data)
        ) {
            this.choices.push({
                name: `generator-${data.name}`,
                value: data.name.substring(10)
            })
        }
    }

    private isTplSpeedseed(data: any) {
        const CHARS_TEMPLATING = 'speedseed-'
        const FIRST_CHARS_DATA = data.name.substring(0, CHARS_TEMPLATING.length)

        return FIRST_CHARS_DATA === CHARS_TEMPLATING
    }

    private searchGeneratorsIncludes(data: any) {
        let isFinded = false

        for (let choice of this.choices) {
            if (
                this.isGeneratorSpeedseed(choice, data) &&
                this.isNotBlackList(choice.name)
            ) {
                isFinded = true
            }
        }

        return isFinded
    }

    private isGeneratorSpeedseed = (choice: any, data: any) =>
        (choice.name === `generator-${data.name}`)

    private isNotBlackList = (name: any) => {
        const gs = 'generator-speedseed-'

        if (name === `${gs}angular2-whitespace`) return false
        if (name === `${gs}polymer-whitespace`) return false

        if (name === `${gs}cleanly-angular2-tour-of-heroes`) return false
        if (name === `${gs}cleanly-polymer-get-started`) return false
        if (name === `${gs}cleanly-todomvc`) return false
        if (name === `${gs}cleanly-breakouts`) return false

        return true
    }
}
