- *Features and conventions*
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

- *Official Templates*
    - **npm i [template] -g**
    - **https://www.npmjs.com/package/generator-speedseed-multi-tic-tac-toe**
    - **https://www.npmjs.com/package/generator-speedseed-cleanly-angular2-tour-of-heroes**
    - **https://www.npmjs.com/package/generator-speedseed-cleanly-polymer-get-started**

---

- *Extras*
    - *Automating tasks*
        - **Gulp**
        - **Webpack**

    ---

    - *Lints*
        - **Editorconfig**
        - **EsLint**

    ---

## Styleguide
- https://github.com/ifedu/speedseed-styleguide Guide in spanish for Jade, JS(ES6) and Stylus

---

## Use
- *Use once in the Operating System*
    - Install libs in the Operating System
    - **npm i generator-speedseed -g**
    - **sd i -g**
    - **npm i generator-speedseed-multi-tic-tac-toe -g** (template multi-tic-tac-toe, install the templates you need)

---

- *Use once in the project folder*
    - Launch generator and install dependencies
    - **sd start**
    - **sd i**

---

- *In the project folder*
    - Compile project in -build and launch project
    - **sd build**

    ---
    - Compile project in -build, launch project and open navigator
    - **sd build open**

    ---
    - Compile project minified in -dist
    - **sd dist**

    ---
    - Compile project minified in -dist, launch project and open navigator
    - **sd dist open**

    ---
    - Launch server -build
    - **sd serve**

    ---
    - Launch server -dist
    - **sd serve dist**

    ---
    - Update generator, install dependencies and launch generator
    - **sd update**

    ---
    - Create component in app/components
    - **sd component**

    ---
    - Compile project in -build and launch unit test
    - **sd spec**

    ---
    - Ident all choice files, configurable in core-config.js
    - **sd indent**

    ---
    - Compile project in -reports and launch complexity code test plato
    - **sd reports**

---

## Structure
- **.core** => *don't change this content folder, is updated with generator-speedseed next versions*
- **-build** => *code generated with npm run build, contain code of app/ transpiled to html, css, js(es5). Folders and files _*are ignored*
- **-dist** => *code generated with npm run dist, contain code minimizied of app/ transpiled to html, css, js(es5). Folders and files _*are ignored*

---

- **app** => *development template*
    - **-vendor** => *libs external*
    - **components** => *components*
        - **_mixins.jade** => *include all mixins*
        - **components** => *include all css*
    - **css** => *contain css files*
    - **js** => *contain js files*
    - **__global.js** => *properties inyects to all files .jade*
    - **_index.js** => *properties inyects to file index.jade*
    - **index.jade** => *index of the app*

---

- **.core-config** => *project routes*
- **.yo-rc.json** => *created for yeoman for future updates*