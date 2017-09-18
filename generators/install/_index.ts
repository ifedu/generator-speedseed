import { Base, core, prompter } from 'speedseed'

import SearchGenerators from './searchGenerators'

export default class Yo extends Base {
    constructor(args: any, options: any) {
        super(args, options)

        const generators = new SearchGenerators()

        prompter.setGenerator(generators)
    }

    paths() {
        core.setPath(__dirname, '../../')
    }

    prompting() {
        const project = prompter.getProject('project')
        const template = prompter.getTemplate('template')
        const templateFiles = prompter.getTemplateFiles('templateFiles')

        prompter.setTemplateChoices(template)

        const options = [project, template, templateFiles]

        prompter.setOptions({ options }, (<any>this).async())
    }

    write() {
        core.setProject()
        core.setOptions()

        core.callTpl({})
    }
}
