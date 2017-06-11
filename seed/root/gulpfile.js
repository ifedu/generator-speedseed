const path = require('path')
const tsNode = require('ts-node')
const tsConfigPaths = require('tsconfig-paths')

const tsConfig = require('./core/tsconfig.json')

tsNode.register({
    compilerOptions: {
        allowJs: true
    },

    project: path.resolve(__dirname),
})

tsConfigPaths.register({
    baseUrl: './',

    paths: tsConfig.compilerOptions.paths,
})

require('./core/main.ts')
