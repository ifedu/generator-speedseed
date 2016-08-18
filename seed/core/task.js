const $ = require('./config.js')

const showCoreVersion = () => console.log($.yo.coreVersion)

const setArguments = () => {
    $.argv = {}

    process.argv.forEach((val, index) => {
        const slice = val.split('=')

        const prop = slice[0].replace(/-/g, '')

        $.argv[prop] = slice[1]
    })
}

const isDist = () => ($.argv.dist === 'true')
const isOpen = () => ($.argv.open === 'true')
const isServer = () => ($.argv.server === 'true')

const overwriteConfig = () => {
    if (isDist()) {
        $.config.dist = true
        $.config.port = $.coreConfig.dist.port

        $.config.less.compress = true
        $.config.sass.outputStyle = 'compressed'
        $.config.scss.outputStyle = 'compressed'
        $.config.styl.compress = true

        $.build = $.dist
    }

    if (isOpen()) $.config.open = true
    if (isServer()) $.config.server = true
}

showCoreVersion()
setArguments()
overwriteConfig()

$.readFolder($.tasks)