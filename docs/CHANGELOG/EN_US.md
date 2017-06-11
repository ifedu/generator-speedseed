### v.0.27.0
    - Change Jade for Pug
    - Improved performance
    - Multiple internal improvements and changes in README
    - Updated to Webpack3
    - Updated to the latest libraries
    - Use of TypeScript throughout the core

### v.0.26.0
    - Fix: task watch with *.css 
    - Fix: Routes with routers
    - Update to Webpack2

### v.0.25.1
    - Fix: sd start gives error when it does not have 3 parameters

### v.0.25.0
    - Add sd generator to create a template for templates
    - Add to use local templates with sd start [template]
    - Delete sd component

### v.0.24.3
    - Add .npmignore
    - Fix: ignore folder scripts _*
    - Displays error message when no include {% =%}

### v.0.24.1
    - Changes in the README

### v.0.24.0
    - Add template breakout
    - Add template todomvc
    - Changes in the README
    - Fix: assets, do not evaluate them as templates
    - Fix: js, no compile assets
    - Fix: watch, reload in .jade

### v.0.23.0
    - Add plugin transform-decorator-legacy in webpack
    - Add shorthands sd and sdsd in CLI speedseed
    - CHANGELOG divided in language files
    - Delete sd typings in CLI speedseed
    - Fix: Task Watch launched when save files _*.*
    - README divided in language files

### v.0.22.1
    - Fix: In Unix, error such file or directory in CLI speedseed

### v.0.22.0
    - Add webpack for compilers JS
    - Add use of import ES6
    - Create templates is now easier
    - delete speedseed clean
    - Files precompile to -tmp
    - Improved use of jsx and ts
    - speedseed cli now displays the internal command
    - speedseed component it does not work correctly

### v.0.21.4
    - Fix: error in task js
    - Fix: eslint complexity

### v.0.21.3
    - Fix: Copy assets dist task
    - Fix: It is not required to always add the dependencies of Babel
    - Added alias speedseed i like speedseed install

### v.0.21.2
    - Fix: speedseed update
    - Add speedseed in .gitattributes

### v.0.21.1
    - Fix: README
    - Compile all jade files when save

### v.0.21.0
    - Assets and vendor read in app/ instead build/
    - Modified speedseed clean [dir]
    - Task copy only used in task dist
    - Templates whitespace add to blacklist

### v.0.20.6
    - Fix: path gulp in Unix
    - Add speedseed help

### v.0.20.5
    - Fix: In Unix error such file or directory in CLI speedseed

### v.0.20.4
    - Update templates default

### v.0.20.1
    - Fix: error when launch speedseed start
    - Fix: README in spanish updated
    - Template multi-tic-tac-toe updated

### v.0.20.0
    - Add speedseed cli
    - All files and libs core moved to templates
    - Global refactor, more clean in app and templates
    - Multiple changes in README
    - Rename all tasks to speedseed *
    - Rename templates whitespace to cleanly

### v.0.19.0
    - Add template speedseed-angular2-whitespace
    - More flexibility and ease to change the core-config.json
    - Update http-proxy-middleware to 0.17.0
    - Update AngularJS to 1.5.7
    - Update Angular2 to 2.0.0-rc.4
    - Update Polymer to 1.6.0
    - Update React to 15.2.1

### v.0.18.1
    - Fix: call to local gulp since npm run: ./node_modules/gulp/bin/gulp.js to gulp

### v.0.18.0
    - Fix: .css compile to -tmp, include minified to jade
    - Fix: No need global gulp
    - Fix: npm run component in Polymer
    - Add npm run serve
    - Add npm run serve-dist
    - Add template polymer-whitespace
    - Allow configure the update of the templates: babelrc, bower.json, bowerrc, eslintrc, package.json
    - Get https://storage.googleapis.com/generators.yeoman.io/cache.json for search templates speedseed
    - npm run update also install bower
    - yo speedseed also get dependencies of the template

### v.0.17.0
    - Fix: npm run component
    - Fix: watch in *.spec.js
    - .core-config.json to core-config.js
    - Add Tests in npm run component with AngularJS
    - Add vendor in property test.files of core-config.js
    - Allow use Chrome or PhantomJS in Karma
    - Simplifies core-config.js

### v.0.16.0
    - Fix: npm run test
    - Allow choice options to show in templates
    - First time "yo speedseed" install template, following times "yo speedseed" update
    - Require Node >= 6.0.0
    - Simplifies creating templates
    - Use lib speedseed common all templates

### v.0.15.5
    - Fix no break app when selection test is no

### v.0.15.4
    - Fix add requests post put patch and delete to mocks server
    - Fix copy karma-config.js without template
    - Fix livereload for css

### v.0.15.3
    - Change template name in selection
    - Css bad writer no break app

### v.0.15.2
    - Better check if file is .jade or .html in includes
    - Names Project and Component to lower case and replace - _ and ' ' for avoid errors

### v.0.15.1
    - All files to 4 spaces, package.json and bower.json 2 spaces
    - Fix .core-config.js and package.json are generated correctly
    - Fix template include for files.html
    - Error message when npm run update import previous files and fail

### v.0.15.0
    - Add npm run server for launch server node
    - Copy dependencies in package.json to -build/vendor
    - Delete property copy in .core-config.js
    - Files .file.* compile in -tmp
    - Fix task copy
    - Modify {%= include(__dirname, '-name.html') %} to {%= include('name.html') %}
    - npm run dist no delete files
    - Templates separated of the generator

### v.0.14.2
    - Delete previuos .core when npm run update or yo speedseed
    - Fix copy node_modules in vendor instead of vendor/@angular
    - Fix ignore folder -vendor in npm run indent
    - Fix npm run dist not delete files vendor
    - Fix search previous props .core-config.json instead of .core-config.js

### v.0.14.1
    - Fix allow includes several templates in a same file
    - Fix tasks no read vendor folder
    - Fix tasks dist
    - Requeriments in README

### v.0.14.0
    - Add templating for includes all routes
    - Fix no copy all typings, only framework selected
    - Update structure folders in README

### v.0.13.0
    - _vendor rename to -vendor and only use with bower, no pushed to git
    - _vendor in -build rename to vendor
    - Add Angular2 in multi-tic-tac-toe template
    - Add npm run typings for create typings for TypeScript
    - Add typings in TypeScript
    - Copy the node_modules selected a -build/vendor, configure in .core-config.json, property copy.node_modules: []
    - Delete ss- in tasks
    - Rename .core-config.js to .core.config.json
    - Rename npm run ss-test to npm run spec
    - Use browsersync for api test, confgure en .core-config.js, property server

### v.0.12.1
    - Fix for Node >6

### v.0.12.0
    - .vendor to _vendor
    - Add CoffeeScript
    - Add TypeScript

### v.0.11.1
    - Fix Polymer includes

### v.0.11.0
    - _vendor to .vendor
    - .core-config.json add properties when update insead of overwrite the file
    - Add documentation of folders and update includes in README
    - Many changes in core for add cleaning and perfomance
    - package.json add core properties when update insead of overwrite the file
    - package.json have only the plugins to use
    - with in little fix .jsx allow inject props object in attributes jade
        - div(lala!='{this.lolo}')
        - <div lala={this.lolo}></div>

    - npm run ss-build compile and launch server in -build
    - npm run ss-build-open compile, launch server and open navigator in -build
    - npm run ss-dist compile minimizied in -dist
    - npm run ss-dist-open compile minimizied, launch server and open navigator in -dist

    - Modifing includes in .js. Ej with template .name.html:
        - Previous: {%= include('dir/relative', 'name', 'html') %}
        - Now: {%= include(__dirname, '-name.html') %}

    - Simplifing includes inline. Ej with file .tpl.jade:
        - Previous: include -.tpl.html
        - Now: include -tpl.hml

### v.0.10.2
    - More variables in core-config.js
    - Default spacesBefore: 2 spacesAfter: 4
    - Default folder multimedia files is assets in dist

### v.0.10.1
    - Default folder multimedia files is assets

### v.0.10.0
    - Add Bower
    - Add Polymer Vulcanize, with external files minimizied!
    - Add npm run ss-indent for indent files
    - Add VanillaJS
    - In .build vendor to _vendor
    - More config in core-config.js

### v.0.9.0
    - Add npm run ss-component for create component
    - Change template <%= to {%=
    - Use BrowserSync for livereload

### v.0.8.1
    - Fix README

### v.0.8.0
    - Allow choice SaSS, ScSS, LeSS or Stylus
    - Allow configure port reload and route api server
    - Error to compile no crash app
    - Fix error in api when route not exist
    - Fix include template html
    - Fix watch a includes files
    - No need recompile for new files
    - Values for default in yo speedseed

### v.0.7.1
    - Update directories in README

### v.0.7.0
    - Add Karma and allow choice Jasmine or Mocha
    - Allow work without jade
    - Change ---* to .*
    - Change name tasks
    - Change folder names
    - Posibility change name folders
    - Update README

### v.0.6.0
    - ---*.js ---*.html ---*.css for precompile files in dev
    - Add Polymer and React
    - Add template based TodoMVC
    - Change in the Generator
    - Fix translate English
    - Rename files index to main

### v.0.5.3
    - Change in Yeoman structure
    - Yeoman no show question Library / Framework? if question Template? is No

### v.0.5.2
    - Add description of the properties speedseed
    - Description only in package.json

### v.0.5.1
    - Improvements in the README

### v.0.5.0
    - Add selection framework
    - Add selection template
    - Delete npm run ss-init
    - Delete npm run ss-install
    - Fix and update Readme

### v.0.4.1
    - Fix copy karma.conf by karma.conf.js

### v.0.4.0
    - Restart changelog in 2 languages
