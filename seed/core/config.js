const fs = require('fs')

const coreConfigUser = JSON.parse(fs.readFileSync('./core-config.json', 'utf8'))
const coreConfig = require('./core-config.js')(coreConfigUser)
const extend = require('extend')

const $ = {
    runSequence: require('run-sequence'),

    tasks: './tasks',

    config: {
        dist: false,
        port: coreConfig.build.port,

        html: {
            doctype: 'html',
            pretty: true
        },

        less: {},

        sass: {},

        scss: {},

        styl: {
            linenos: true
        }
    },

    if: {
        notInclude: true
    },

    options: {
        css: require('./options/css.js'),
        compiler: require('./options/compiler.js'),
        framework: require('./options/framework.js')
    },

    yo: require('../.yo-rc.json')['generator-speedseed'],

    getJs(route) {
        delete require.cache[route]

        const JSON_FILE = (fs.existsSync(route)) ? require(route) : {}

        extend(true, this.propsHtml, JSON_FILE)
    },

    getJsProps(file, ext) {
        const path = require('path')

        const route = file.path || file

        const DIR_NAME = path.dirname(route)
        const FILE_NAME = path.basename(route, ext)

        const ROUTE_LOCAL = path.resolve(__dirname, DIR_NAME, `_${FILE_NAME}.js`)
        this.getJs(ROUTE_LOCAL)

        return this.propsHtml
    },

    filterProps(ext) {
        return [
            `**/*`,
            `!**/*.spec.${ext}`,

            `!**/.*.${ext}`,
            `!**/.**/**/*.${ext}`,

            `!**/_*.${ext}`,
            `!**/_**/**/*.${ext}`,

            `!**/-*.${ext}`,
            `!**/-**/**/*.${ext}`
        ]
    },

    readFolder(folder) {
        const path = require('path')

        const PATH = path.join(__dirname, folder)

        const FILES = fs.readdirSync(PATH)

        FILES.forEach((file) => require(`${this.tasks}/${file}`)(this, require('gulp')))
    },

    resetPropsHtml() {
        const path = require('path')

        this.propsHtml = {
            include(file) {
                const path = require('path')

                let fileTmp = path.normalize(`${$.dirInclude}/${file}`)

                fileTmp = (fs.existsSync(fileTmp))
                    ? fileTmp
                    : fileTmp.replace($.app.dir.substring('2'), $.tmp.dir.substring('2'))

                return fs.readFileSync(fileTmp)
            }
        }

        const ROUTE_GLOBAL = path.resolve(__dirname, '../', `${this.app.dir}/__global.js`)

        this.getJs(ROUTE_GLOBAL)
    },

    setParams() {
        const util = require('gulp-util')

        if (util.env.dist === 'true') {
            this.config.dist = true
            this.config.port = coreConfig.dist.port

            this.config.less.compress = true
            this.config.sass.outputStyle = 'compressed'
            this.config.scss.outputStyle = 'compressed'
            this.config.styl.compress = true

            this.build = this.dist
        }

        if (util.env.open === 'false') this.config.open = false
        if (util.env.server === 'false') this.config.server = false
    },

    translateTpl(content, route, ext) {
        const _ = require('lodash')
        const path = require('path')

        const dataTpl = extend(true, {}, this.getJsProps(route, ext))

        let filesTpl
        let newLine
        let i

        const readFolder = (dir, ext, underscore, txt, spaces, file) => {
            const dirFile = `${dir}/${file}`

            if (fs.lstatSync(dirFile).isDirectory() === true) {
                fs.readdirSync(dirFile).forEach((fileSon) => readFolder(dirFile, ext, underscore, txt, spaces, fileSon))
            }
            else if (path.extname(dirFile) === ext) {
                if (
                    (underscore === false && file.substring(0, 1) === '_') ||
                    file.substring(0, 1) === '.' ||
                    file.indexOf('.spec') > -1
                ) {
                    return
                }

                let routeFile = path.dirname(route)
                routeFile = path.relative(routeFile, dirFile)
                routeFile = routeFile.replace(/\\/g, '/')

                const routeFileTpl = txt.replace('$TPL$', routeFile).replace('.ts', '.js').replace('.coffee', '.js').replace('.jsx', '.js')

                let space = (i > 0) ? spaces : ''
                newLine = (i > 0) ? '\n' : ''
                i++

                filesTpl += `${newLine}${space}${routeFileTpl}`
            }
        }

        dataTpl.getRoutes = (dir, ext, underscore, txt, spaces) => {
            const dirNormal = path.normalize(path.dirname(route))
            const directory = `${dirNormal}/${dir}`

            filesTpl = ''
            newLine = ''
            i = 0

            spaces = spaces || ''

            fs.readdirSync(directory).forEach((file) => readFolder(directory, ext, underscore, txt, spaces, file))

            return filesTpl
        }

        $.dirInclude = path.dirname(route)

        try {
            return _.template(content, {
                'evaluate': /{%=([\s\S]+?)%}/g,
                'interpolate': /{%=([\s\S]+?)%}/g
            })(dataTpl)
        } catch (e) {
            return content
        }
    }
}

extend($, coreConfig)

module.exports = $