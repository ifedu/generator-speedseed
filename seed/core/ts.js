const path = require('path')
const tsNode = require('ts-node')
const tsConfigPaths = require('tsconfig-paths')

const tsConfig = require('./tsconfig.json')

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
