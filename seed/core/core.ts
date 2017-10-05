import { isArray } from 'lodash'

export default class Core {
    args: any = {}

    constructor() {
        process.argv.forEach(this.argEach)
    }

    concatArr(objValue: any, srcValue: any): any {
        if (isArray(objValue)) return objValue.concat(srcValue)
    }

    private argEach = (val: any) => {
        const slice = val.split('=')

        const prop = slice[0].replace(/--/, '')
        let value = slice[1]

        switch (value) {
            case undefined:
            case 'true':
                value = true
            break;
            case 'false':
                value = false
            break;
        }

        this.args[prop] = value
    }
}
