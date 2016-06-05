### v.0.12.0

## Index
- [English](#english)
- [Español](#español)

### English
- *Properties*
    - Files and folders start for _ no compile to build, perfect for includes properties
    - Files with .name.scss .name.js .name.jade precompile in app, perfect for includes files
        - In *.jade include -name.css -name.js -name.html
        - In *.js {%= include(__dirname, '-name.html') %} for files .name.jade
    
    - Allow update the core of the project through npm run ss-update without affecting the development of the project
    - Global properties for our jades with con __global.js
    - Local properties for our jades with nombre.jade _nombre.js

---
    
- *Allow choice*
    - *Framework/Libs*
        - **AngularJS 1.5.5**
        - **jQuery 2.2.3**
        - **Polymer 1.0**
        - **React 15.0.2** (Read IMPORTANT.txt)
        - **VanillaJS**
    
    ---

    - *Templates*
        - **https://github.com/ifedu/speedseed-multi-tic-tac-toe**
        - **https://github.com/ifedu/speedseed-todomvc**

    ---

    - *CSS*
        - **SaSS**
        - **ScSS**
        - **LeSS**
        - **Stylus**

    ---

    - *JS*
        - **BabelJs**
        - **CoffeeScript**
        - **TypeScript**
    
    ---

    - *Test*
        - **Mocha**
        - **Jasmine**
    
    ---

- *Add*
    - *Automating tasks*
        - **Gulp**v

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
    - **npm i gulp -g**
    - **npm i yo -g**
    - **npm i generator-speedseed -g**

---

- *Once use in the project folder*
    - Launch generator and install dependencies
    - **yo speedseed**
    - **npm i**

---

- *In the project folder*
    - Compile project in -build and launch project
    - **npm run ss-build**

    ---
    - Compile project in -build, launch project and open navigator
    - **npm run ss-build-open**

    ---
    - Compile project minified in -dist
    - **npm run ss-dist**

    ---
    - Compile project minified in -dist, launch project and open navigator
    - **npm run ss-dist-open**

    ---
    - Update generator, install dependencies and launch generator
    - **npm run ss-update**

    ---
    - Compile project in -reports and launch complexity code test plato
    - **npm run ss-reports**

    ---
    - Compile project in -build and launch unit test
    - **npm run ss-test**

    ---
    - Create component in app/components
    - **npm run ss-component**

    ---
    - Ident all choice files, configurable in core-config.js
    - **npm run ss-indent**

    ---
    - Delete generate folders -build -dist -reports node_modules
    - **npm run ss-clean**

---

## Structure
- **.core** => *don't change this content folder, is updated with generator-speedseed next versions*
- **-build** => *code generated with npm run ss-build, contain code of app/ transpiled to html, css, es5. Folders and files _*are ignored*
- **-dist** => *code generated with npm run ss-dist, contain code minimizied of app/ transpiled to html, css, es5. Folders and files _*are ignored*

---

- **app** => *development template*
    - **.vendor** => *libs external*
    - **components** => *components*
        - **_main.jade** => *include all mixins*
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



### Español
- *Propiedades*
    - Ficheros y carpetas que empiezan por _ no se compilan a build, perfecto para incluir propiedades
    - Ficheros con .name.scss .name.js .name.jade precompilan en app, perfecto para incluir ficheros
        - En *.jade include -name.css -name.js -name.html
        - En *.js {%= include(__dirname, '-name.html') %} para ficheros .name.jade
    
    - Permite actualizar el núcleo del proyecto mediante npm run ss-update sin afectar al desarrollo del proyecto
    - Propiedades globales para nuestros jades con __global.js
    - Propiedades locales para nuestros jades con nombre.jade _nombre.js

---

- *Permite elegir*
    - *Framework/Libs*
        - **AngularJS 1.5.5**
        - **jQuery 2.2.3**
        - **Polymer 1.0**
        - **React 15.0.2** (Read IMPORTANT.txt)
        - **VanillaJS**
    
    ---

    - *Plantillas*
        - **https://github.com/ifedu/speedseed-multi-tic-tac-toe**
        - **https://github.com/ifedu/speedseed-todomvc**
    
    ---

    - *CSS*
        - **SaSS**
        - **ScSS**
        - **LeSS**
        - **Stylus**
    
    ---

    - *Test*
        - **Mocha**
        - **Jasmine**
    
    ---

- *Añade*
    - *Automatizar tareas*
        - **Gulp**

    ---

    - *JS*
        - **BabelJs**

    ---

    - *Lints*
        - **Editorconfig**
        - **EsLint**

    ---

    - *Html*
        - **Jade**

    ---

## Styleguide
- https://github.com/ifedu/speedseed-styleguide Guía en español para Jade, JS(ES6) y Stylus

---

## Uso
- *Usar una vez en el Sistema Operativo*
    - Instala librerías en el Sistema Operativo
    - **npm i gulp -g**
    - **npm i yo -g**
    - **npm i generator-speedseed -g**

---

- *Usar una vez en la carpeta del proyecto*
    - Lanza el generador e instalas las dependencias
    - **yo speedseed**
    - **npm i**

---

- *En la carpeta del proyecto*
    - Compila el proyecto en -build y lo lanza
    - **npm run ss-build**

    ---
    - Compila el proyecto en -build, lo lanza y abre el navegador
    - **npm run ss-build-open**

    ---
    - Compila el proyecto minificado en -dist
    - **npm run ss-dist**

    ---
    - Compila el proyecto minificado en -dist, lo lanza y abre el navegador
    - **npm run ss-dist-open**

    ---
    - Actualiza el generador, lo ejecuta e instala las dependencias
    - **npm run ss-update**

    ---
    - Compila el proyecto en -reports y lanza test de complejidad de código plato
    - **npm run ss-check**

    ---
    - Compila el proyecto en -build y lanza los test unitarios
    - **npm run ss-test**

    ---
    - Crea un componente en app/components
    - **npm run ss-component**

    ---
    - Identa todos los ficheros elegidos, configurable en core-config.js
    - **npm run ss-indent**

    ---
    - Borra carpetas generadas -build -dist -reports node_modules
    - **npm run ss-clean**
    
---

## Structure
- **.core** => *no cambiar el contenido de esta carpeta, es actualizado en futuras versiones de generator-speedseed*
- **-build** => *código generado con npm run ss-build, contiene código de app/ transpilado a html, css, es5. Carpetas y ficheros _* son ignorados*
- **-dist** => *código generado con npm run ss-dist, contiene código minificado de app/ transpilado a html, css, es5. Carpetas y ficheros _* son ignorados*
---

- **app** => *plantilla de desarrollo*
    - **.vendor** => *libs externas*
    - **components** => *componentes*
        - **_main.jade** => *incluye todos los mixins*
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