export default {
    "extends": "./core/tsconfig.json",

    "compilerOptions": {
        "baseUrl": ".",
        "target": "es5",
        "lib": ["es2016", "dom"]
    },

    "exclude": [
        "node_modules",
        "core",
        "-build",
        "-dist",
        "-tmp"
    ]
}
