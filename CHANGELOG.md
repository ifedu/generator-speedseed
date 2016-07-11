- [English](#english)
- [Spanish](#spanish)

## English
### v.0.18.1
    - Fix: call to local gulp since npm run: ./node_modules/gulp/bin/gulp.js to gulp

### v.0.18.0
    - Fix: .css compile to .tmp, include minified to jade
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

## Spanish
### v.0.18.1
    - Arregla: llamada a gulp local desde npm run: ./node_modules/gulp/bin/gulp.js a gulp

### v.0.18.0
    - Arregla: .css compila a .tmp, include minificado a jade
    - Arregla: No necesita global gulp
    - Arregla: npm run component en Polymer
    - Añade npm run serve
    - Añade npm run serve-dist
    - Añade template polymer-whitespace
    - Permite configurar el actualizar de los templates: babelrc, bower.json, bowerrc, eslintrc, package.json
    - Toma https://storage.googleapis.com/generators.yeoman.io/cache.json para buscar en plantillas speedseed
    - npm run update también instala bower
    - yo speedseed también obtiene dependencias de la plantilla


### v.0.17.0
    - Arregla: npm run component
    - Arregla: watch en *.spec.js
    - .core-config.json a core-config.js
    - Añade Test en npm run component con AngularJS
    - Añade vendor en propiedad test.files de core-config.js
    - Permite usar Chrome o PhantomJS en Karma
    - Simplifica core-config.js

### v.0.16.0
    - Arregla: npm run test 
    - Permite elegir opciones a mostrar en plantillas
    - Primera vez "yo speedseed" instala plantilla, siguientes veces "yo speedseed" actualiza
    - Requiere Node >= 6.0.0
    - Simplifica la creación de plantillas 
    - Usa lib speedseed común a todas las plantillas

### v.0.15.5
    - Arregla: no romper la app cuando seleccion de test es no

### v.0.15.4
    - Arregla: añade peticiones post put patch y delete al servidor de mocks
    - Arregla: copiar karma-config.js sin plantilla
    - Arregla: livereload para css

### v.0.15.3
    - Cambia el nombre de la plantilla en selección
    - Css mal escrito no rompe la app

### v.0.15.2
    - Mejor comprobación si fichero es .jade o .html en includes
    - Nombres Project y Component a minúsculas y reemplaza - _ y ' ' para evitar errores

### v.0.15.1
    - Todos los ficheros a 4 espacios, package.json y bower.json 2 espacios
    - Arregla .core-config.js y package.json son generados correctamente
    - Arregla plantilla incluir para ficheros.html
    - Mensaje de error cuando npm run update importa ficheros previos y falla

### v.0.15.0
    - Añade npm run server para lanzar servidor node
    - Arregla tarea de copiar
    - Borra propiedad copiar en .core-config.js
    - Copia dependencies en package.json a -build/vendor
    - Ficheros .file.* compilan en -tmp
    - Modifica {%= include(__dirname, '-nombre.html') %} a {%= include('nombre.html') %}
    - npm run dist no borra ficheros
    - Plantillas separadas de el generador

### v.0.14.2
    - Arregla copiar node_modules en vendor en vez de en vendor/@angular
    - Arregla ignora carpeta -vendor en npm run indent
    - Arregla npm run dist no borra ficheros vendor
    - Arregla buscar propiedades previas en .core-config.json en vez de .core-config.js
    - Borra anterior .core cuando npm run update o yo speedseed

### v.0.14.1
    - Arregla permitir incluir varias plantillas en un mismo fichero
    - Arregla tareas para que no lean la carpeta vendor
    - Arregla tareas dist
    - Requerimientos en README

### v.0.14.0
    - Añadida plantilla para incluir todas las rutas
    - Arreglado no copiar todos los typings, sólo los de el framework seleccionado
    - Actualiza estructura de carpetas en README

### v.0.13.0
    - _vendor renombreado a -vendor y sólo se usa con bower, no se sube a git
    - _vendor en -build renombrado a vendor
    - Añade Angular2 en template multi-tic-tac-toe
    - Añade npm run typings para crear typings para TypeScript
    - Añade typings en TypeScript
    - Borra ss- in tasks
    - Copia los node_modules seleccionados en -build/vendor, configurable en .core-config.json, propiedad copy.node_modules: []
    - Renombra .core-config.js a .core.config.json
    - Renombra npm run ss-test a npm run spec 
    - Usa browsersync para api de pruebas, configurable en .core-config.js, propiedad server

### v.0.12.1
    - Corrige error en Node >6

### v.0.12.0
    - .vendor a _vendor
    - Añadido CoffeeScript
    - Añadido TypeScript

### v.0.11.1
    - Arregla los includes de Polymer

### v.0.11.0
    - .core-config.json añade propiedades cuando actualizas en lugar de sobreescribir el archivo
    - Añade documentación de carpetas y actualiza includes en README
    - Con un pequeño arreglo .jsx permiten inyectar propiedades de objetos en atributos jade
        - div(lala!='{this.lolo}') 
        - <div lala={this.lolo}></div>

    - Multiples cambios en núcleo para añadir limpieza y rendimiento
    - package.json añade propiedades del core al actualizar en lugar de sobreescribir el archivo
    - package.json sólo tiene los plugins a usar

    - npm run ss-build compila y lanza el servidor en -build
    - npm run ss-build-open compila, lanza el servidor y abre el navegador en -build
    - npm run ss-dist compila minimizado en -dist
    - npm run ss-dist-open compile minimizado, lanza el servidor y abre el navegador en -dist

    - Modificando includes en .js. Ej con template .name.html:
        - Antes: {%= include('dir/relative', 'name', 'html') %}
        - Ahora: {%= include(__dirname, '-name.html') %}

    - Simplificando includes enline. Ej con fichero .tpl.jade:
        - Antes: include -.tpl.html
        - Antes: include -tpl.hml 

### v.0.10.1
    - Por defecto la carpeta de archivos multimedia es assets

### v.0.10.0
    - Añade Bower
    - Añade Polymer Vulcanize, ¡con ficheros externos minimizados!
    - Añade npm run ss-indent para identar ficheros
    - Añade VanillaJS
    - En .build vendor a _vendor
    - Más configuración en core-config.js

### v.0.9.0
    - Añade npm run ss-component para crear componente
    - Cambia template <%= a {%=
    - Usa BrowserSync para livereload

### v.0.8.1
    - Arregla el README

### v.0.8.0
    - Arregla error en api cuando ruta no existe
    - Arregla incluir plantilla html
    - Arregla watch a ficheros incluidos
    - Error al compilar no rompe la app
    - No necesita precompilar para nuevos ficheros
    - Permite configurar puerto reload y ruta del servidor api
    - Permite elegir SaSS, ScSS, LeSS o Stylus
    - Valores por defecto en yo speedseed

### v.0.7.1
    - Actualiza directorios en README

### v.0.7.0
    - Actualiza README
    - Añade Karma y permite elegir Jasmine o Mocha
    - Cambia ---* por .*
    - Cambia el nombre de las tareas
    - Cambia nombres de carpetas
    - Permite trabajar sin jade
    - Posibilidad de cambiar el nombre de las carpetas

### v.0.6.0
    - ---*.js ---*.html ---*.css para precompilar ficheros en dev
    - Añade Polymer y React
    - Aaña plantilla basada en TodoMVC
    - Arregla traducción inglesa
    - Cambios en el Generador
    - Renombra ficheros index a main

### v.0.5.3
    - Cambios en estructura de yeoman
    - Yeoman no muestra pregunta Library / Framework? si la pregunta Template? es No

### v.0.5.2
    - Añade descripció de las propiedades de speedseed
    - Descripción sólo en package.json

### v.0.5.1
    - Mejoras en el README

### v.0.5.0
    - Añade selección de framework
    - Añade selección de plantilla
    - Arregla y actualiza el Readme
    - Borra npm run ss-init
    - Borra npm run ss-install

### v.0.4.1
    - Arregla copiar karma.conf por karma.conf.js

### v.0.4.0
    - Reinicia el changelog en 2 idiomas