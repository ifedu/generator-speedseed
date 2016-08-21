### v.0.21.3

### Requeriments
- NodeJS >= 6.0.0

### Index
- [English](#english)
- [Spanish](#spanish)

### Changelog
- [Changelog](https://github.com/ifedu/generator-speedseed/blob/master/CHANGELOG.md)

### English
- *Features and conventions*
    - Unit Test must be called *.spec.js 
    - Files and folders start for _ no compile to build, used for includes properties or native includes
    - Files with .name.scss .name.js .name.jade compile in .tmp, used for includes files with templating {%= %}
        - {%= include('name.html') %} for files .name.jade, .name.sass or without a point if they do not have to be compiled as name.html, name.css

    - Allow include routes, perfect for includes all components
        - Syntax: {%= getRoutes(folderRoute, ext, (Boolean include _files), `$TPL$ replace for route`, 'indent') %}
        - Example: {%= getRoutes('components', '.js', true, `script(src='$TPL$')`, '            ') %}
        - Example: {%= getRoutes('../components', '.styl', true, `@import '$TPL$'`) %}
    
    - Allow update the core of the project through npm run update without affecting the development of the project
    - Global properties for our jades with con __global.js
    - Local properties for our jades with name.jade _name.js

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

    ---

    - *Lints*
        - **Editorconfig**
        - **EsLint**

    ---

    - *Html*
        - **Jade**

    ---

## Styleguide
- https://github.com/ifedu/speedseed-styleguide Guide in spanish for Jade, JS(ES6) and Stylus

---

## Use
- *Once use in the Operating System*
    - Install libs in the Operating System
    - **npm i generator-speedseed -g**
    - **speedseed install -g**
    - **npm i generator-speedseed-multi-tic-tac-toe -g** (template multi-tic-tac-toe)

---

- *Once use in the project folder*
    - Launch generator and install dependencies
    - **speedseed start**
    - **speedseed install**

---

- *In the project folder*
    - Compile project in -build and launch project
    - **speedseed build**

    ---
    - Compile project in -build, launch project and open navigator
    - **speedseed build open**

    ---
    - Compile project minified in -dist
    - **speedseed dist**

    ---
    - Compile project minified in -dist, launch project and open navigator
    - **speedseed dist open**

    ---
    - Launch server -build
    - **speedseed serve**

    ---
    - Launch server -dist
    - **speedseed serve dist**

    ---
    - Update generator, install dependencies and launch generator
    - **speedseed update**

    ---
    - Create component in app/components
    - **speedseed component**

    ---
    - Compile project in -build and launch unit test
    - **speedseed spec**

    ---
    - Create typings for TypeScript based in typings.json
    - **speedseed typings**

    ---
    - Ident all choice files, configurable in core-config.js
    - **speedseed indent**

    ---
    - Compile project in -reports and launch complexity code test plato
    - **speedseed reports**

    ---
    - Delete generate folders -build -dist -reports -tmp node_modules
    - **speedseed clean**

---

## Structure
- **.core** => *don't change this content folder, is updated with generator-speedseed next versions*
- **-build** => *code generated with npm run build, contain code of app/ transpiled to html, css, es5. Folders and files _*are ignored*
- **-dist** => *code generated with npm run dist, contain code minimizied of app/ transpiled to html, css, es5. Folders and files _*are ignored*

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

- **.babelrc** => *used for babeljs for compile to ES5*
- **.bowerrc** => *bower folder destination*
- **.core-config** => *project routes*
- **.editorconfig** => *list of code rules for the IDE*
- **.eslintrc** => *list of code rules*
- **.gitignore** => *ignore files for git*
- **.yo-rc.json** => *created for yeoman for future updates*
- **bower.json** => *bower dependencies*
- **gulpfile.js** => *call gulp tasks of .core*
- **package.json** => *packages of npm and information of the project*
- **typings.json** => *typings of libs for TypeScript*



### Spanish
- *Características y convenciones*
    - Test Unitarios deben llamarse *.spec.js
    - Ficheros y carpetas que empiezan por _ no se compilan a build, usado para incluir propiedades o includes nativos
    - Ficheros con .nombre.scss .nombre.js .nombre.jade precompilan en .tmp, usado para incluir ficheros mediante el templating {%= %}
        - {%= include('nombre.html') %} para ficheros .nombre.jade, .nombre.sass o sin punto si no tienen que compilarse como nombre.html, nombre.css

    - Permite incluir rutas de componentes, perfecto para automatizar incluir todos los componentes
        - Sintaxis: {%= getRoutes(rutaCarpeta, ext, (Boolean incluye _files), `$TPL$ reemplazado por ruta`, 'identación') %}
        - Ejemplo: {%= getRoutes('components', '.js', false, `script(src='$TPL$')`, '            ') %}
        - Ejemplo: {%= getRoutes('../components', '.styl', true, `@import '$TPL$'`) %}
    
    - Permite actualizar el núcleo del proyecto mediante npm run update sin afectar al desarrollo del proyecto
    - Propiedades globales para nuestros jades con __global.js
    - Propiedades locales para nuestros jades con nombre.jade _nombre.js

---

- *Plantillas oficiales*
    - **npm i [plantilla] -g**
    - **https://www.npmjs.com/package/generator-speedseed-multi-tic-tac-toe**
    - **https://www.npmjs.com/package/generator-speedseed-cleanly-angular2-tour-of-heroes**
    - **https://www.npmjs.com/package/generator-speedseed-cleanly-polymer-get-started**

---

- *Extras*
    - *Automatización de tareas*
        - **Gulp**

    ---

    - *Lints*
        - **Editorconfig**
        - **EsLint**

    ---

    - *HTML*
        - **Jade**

    ---

## Guía de estilos
- https://github.com/ifedu/speedseed-styleguide Guía en español para Jade, JS(ES6) y Stylus

---

## Instrucciones de uso
- *Usar una vez en el Sistema Operativo*
    - Instala librerías en el Sistema Operativo
    - **npm i generator-speedseed -g**
    - **speedseed install -g**
    - **npm i generator-speedseed-multi-tic-tac-toe -g** (template multi-tic-tac-toe)

---

- *Usar una vez en la carpeta del proyecto*
    - Lanza el generador e instalas las dependencias
    - **speedseed start**
    - **speedseed install**

---

- *En la carpeta del proyecto*
    - Compila el proyecto en -build y lo lanza
    - **speedseed build**

    ---
    - Compila el proyecto en -build, lo lanza y abre el navegador
    - **speedseed build open**

    ---
    - Compila el proyecto minificado en -dist
    - **speedseed dist**

    ---
    - Compila el proyecto minificado en -dist, lo lanza y abre el navegador
    - **speedseed dist open**

    ---
    - Lanza el server -build
    - **speedseed serve**

    ---
    - Lanza el server -dist
    - **speedseed serve dist**

    ---
    - Actualiza el generador, lo ejecuta e instala las dependencias
    - **speedseed update**

    ---
    - Crea un componente en app/components
    - **speedseed component**

    ---
    - Compila el proyecto en -build y lanza los test unitarios
    - **speedseed spec**

    ---
    - Crea typings para TypeScript basado en typings.json
    - **speedseed typings**

    ---
    - Identa todos los ficheros elegidos, configurable en core-config.js
    - **speedseed indent**

    ---
    - Compila el proyecto en -reports y lanza test de complejidad de código plato
    - **speedseed reports**

    ---
    - Borra carpetas generadas -build -dist -reports -tmp node_modules
    - **speedseed clean**
    
---

## Structure
- **.core** => *no cambiar el contenido de esta carpeta, es actualizado en futuras versiones de generator-speedseed*
- **-build** => *código generado con npm run build, contiene código de app/ transpilado a html, css, es5. Carpetas y ficheros _* son ignorados*
- **-dist** => *código generado con npm run dist, contiene código minificado de app/ transpilado a html, css, es5. Carpetas y ficheros _* son ignorados*

---

- **app** => *plantilla de desarrollo*
    - **-vendor** => *libs externas*
    - **components** => *componentes*
        - **_mixins.jade** => *incluye todos los mixins*
        - **components** => *incluye todos los css*
    - **css** => *contiene ficheros css*
    - **js** => *contiene ficheros js*
    - **__global.js** => *propiedades inyectadas a ficheros .jade*
    - **_index.js** => *propiedades inyectadas al fichero index.jade*
    - **index.jade** => *indice de la app*

---

- **.babelrc** => *usado por babeljs para compilar a ES5*
- **.bowerrc** => *carpeta de destino de bower*
- **.core-config** => *rutas del proyecto*
- **.editorconfig** => *lista de reglas de código para el IDE*
- **.eslintrc** => *lista de reglas de código*
- **.gitignore** => *ignora ficheros de git*
- **.yo-rc.json** => *creado por yeoman para futuras actualizaciones*
- **bower.json** => *dependencias de bower*
- **gulpfile.js** => *llama a las tareas de gulp de -ss*
- **package.json** => *paquetes de npm e información del proyecto*
- **typings.json** => *typings de librerías para TypeScript*