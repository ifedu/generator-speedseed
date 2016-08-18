module.exports = {
    framework: [
        { name: 'AngularJS', value: 'angularjs' },
        { name: 'Angular2', value: 'angular2' },
        { name: 'jQuery', value: 'jquery' },
        { name: 'Polymer', value: 'polymer' },
        { name: 'React', value: 'react' },
        { name: 'VanillaJS', value: 'vanillajs' }
    ],

    angularjs: {
        compiler: [
            { name: 'BabelJS', value: 'babeljs' },
            { name: 'CoffeeScript', value: 'coffeescript' },
            { name: 'TypeScript', value: 'typescript' }
        ],

        css: [
            { name: 'SaSS', value: 'sass' },
            { name: 'ScSS', value: 'scss' },
            { name: 'Less', value: 'less' },
            { name: 'Stylus', value: 'styl' }
        ]
    },

    angular2: {
        compiler: [
            { name: 'BabelJS', value: 'babeljs' },
            { name: 'TypeScript', value: 'typescript' }
        ],

        css: [
            { name: 'SaSS', value: 'sass' },
            { name: 'ScSS', value: 'scss' },
            { name: 'Less', value: 'less' },
            { name: 'Stylus', value: 'styl' }
        ]
    },

    jquery: {
        compiler: [
            { name: 'BabelJS', value: 'babeljs' },
            { name: 'CoffeeScript', value: 'coffeescript' },
            { name: 'TypeScript', value: 'typescript' }
        ],

        css: [
            { name: 'SaSS', value: 'sass' },
            { name: 'ScSS', value: 'scss' },
            { name: 'Less', value: 'less' },
            { name: 'Stylus', value: 'styl' }
        ]
    },

    polymer: {
        compiler: [
            { name: 'BabelJS', value: 'babeljs' },
            { name: 'CoffeeScript', value: 'coffeescript' },
            { name: 'TypeScript', value: 'typescript' }
        ],

        css: [
            { name: 'SaSS', value: 'sass' },
            { name: 'ScSS', value: 'scss' },
            { name: 'Less', value: 'less' },
            { name: 'Stylus', value: 'styl' }
        ]
    },

    react: {
        compiler: [
            { name: 'BabelJS', value: 'babeljs' }
        ],

        css: [
            { name: 'SaSS', value: 'sass' },
            { name: 'ScSS', value: 'scss' },
            { name: 'Less', value: 'less' },
            { name: 'Stylus', value: 'styl' }
        ]
    },

    vanillajs: {
        compiler: [
            { name: 'BabelJS', value: 'babeljs' },
            { name: 'CoffeeScript', value: 'coffeescript' },
            { name: 'TypeScript', value: 'typescript' }
        ],

        css: [
            { name: 'SaSS', value: 'sass' },
            { name: 'ScSS', value: 'scss' },
            { name: 'Less', value: 'less' },
            { name: 'Stylus', value: 'styl' }
        ]
    },

    test: [
        { name: 'Mocha', value: 'mocha' },
        { name: 'Jasmine', value: 'jasmine' }
    ]
}