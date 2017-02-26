### Use
- *Use once in the Operating System for install libs in the Operating System*
    - **npm i generator-speedseed -g**
    - **sd i -g**
    - **npm i [TEMPLATE] -g** (template multi-tic-tac-toe, install the templates generator-speedseed you need)
    - Official Templates
        - [cleanly-angular2-tour-of-heroes](https://www.npmjs.com/package/generator-speedseed-cleanly-angular2-tour-of-heroes)
        - [cleanly-breakouts](https://www.npmjs.com/package/generator-speedseed-cleanly-breakouts)
        - [cleanly-polymer-get-started](https://www.npmjs.com/package/generator-speedseed-cleanly-polymer-get-started)
        - [cleanly-todomvc](https://www.npmjs.com/package/generator-speedseed-cleanly-todomvc)
        - [multi-tic-tac-toe](https://www.npmjs.com/package/generator-speedseed-multi-tic-tac-toe)

- *Use once in the project folder for launch generator and install dependencies*
    - **sd start [template name]** -> The third parameter is optional so that you can install local or private templates. Ex: sd start multi-tic-tac-toe-beta
    - **sd i**

- *In the project folder*
    - **sd build** -> Compile project in -build and launch project
    - **sd build open** -> Compile project in -build, launch project and open navigator

    - **sd dist** -> Compile project minified in -dist
    - **sd dist open** -> Compile project minified in -dist, launch project and open navigator

    - **sd serve** -> Launch server -build
    - **sd serve dist** -> Launch server -dist

    - **sd update** -> Update generator, install dependencies and launch generator

    - **sd component** -> Create component in app/components

    - **sd spec** -> Compile project in -build and launch unit test

    - **sd indent** -> Indent all choice files, configurable in core-config.js

    - **sd reports** -> Compile project in -reports and launch complexity code test plato

---

### Features and conventions
- Unit Test must be called *.spec.js
- Files and folders start for _ no compile to build, used for includes properties or native includes
- Files with .*.* precompile in .tmp, used for includes files with templating {%= %}
    - {%= include('name.html') %} for files .*.* or *.* if they do not have to be compiled as name.html, name.css

- Allow include routes, perfect for includes all components
    - Syntax: {%= getRoutes(folderRoute, ext, (Boolean include _files), `$TPL$ replace for route`, 'indent') %}
    - Example: {%= getRoutes('components', '.js', true, `script(src='$TPL$')`, '            ') %}
    - Example: {%= getRoutes('../components', '.styl', true, `@import '$TPL$'`) %}

- Allow update the core of the project through npm run update without affecting the development of the project
- Global properties for our jades with con __global.js
- Local properties for our jades with name.jade _name.js
- In command line you can use sd, sdsd or speedseed

---

### Structure
- **.core** -> *don't change this content folder, is updated with generator-speedseed next versions*
- **-build** -> *code generated with npm run build, contain code of app/ transpiled to html, css, js(es5). Folders and files _*are ignored*
- **-dist** -> *code generated with npm run dist, contain code minimizied of app/ transpiled to html, css, js(es5). Folders and files _*are ignored*

---

- **app** -> *development template*
    - **-vendor** -> *libs external*
    - **assets** -> *files to copy, not compile*
    - **components** -> *components*
        - **_mixins.jade** -> *include all mixins*
        - **components** -> *include all css*
    - **css** -> *contain css files*
    - **js** -> *contain js files*
    - **__global.js** -> *properties inyects to all files .jade*
    - **_index.js** -> *properties inyects to file index.jade*
    - **index.jade** -> *index of the app*

---

- **.core-config** -> *project routes*
- **.yo-rc.json** -> *created by yeoman for future updates*

---

### Styleguide
- [Guide in spanish for Jade, JS(ES6) and Stylus](https://github.com/ifedu/cleanly-styleguide)