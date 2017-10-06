### v.0.30.0
- Tareas de construcción de app con electron

### v.0.29.1
    - Corrige: README

### v.0.29.0
    - Añadida Licencia MIT
    - Cambios en paths
    - Cambios en templating
    - Cambios en README
    - Cambiadas varias tareas de gulp a webpack
    - Fichero de opciones para webpack

### v.0.28.0
    - Corrige: mejora la velocidad al no incluir los vendor.js en los main.js
    - Actualización: speedseed a v.022.8
    - Añade soporte para crear aplicaciones con Electron
    - Cambios en templating <% a /*<
    - No crea sourcemaps en dist

### v.0.27.7
    - Corrige: crea .gitignore
    - Actualización: speedseed a v.022.7
    - .tscache por defecto

### v.0.27.6
    - Actualización: speedseed a v.022.6
    - Añade .tscache
    - bower_components añadido a .gitignore

### v.0.27.5
    - Actualización: speedseed a v.022.5
    - Corrige: Error en sd construct

### v.0.27.4
    - Actualización: speedseed a v.022.4
    - Corrige: Mayor velocidad al lanzar sd start por primera vez

### v.0.27.3
    - Corrige: DevDependencies a Dependencies
    
### v.0.27.2
    - Corrige: Añade npm i yo -g en README

### v.0.27.1
    - Corrige: Error de TypeScript al iniciar

### v.0.27.0
    - Actualización: las últimas librerías
    - Actualización: Webpack 3
    - Cambia Jade por Pug
    - Mejorado el rendimiento
    - Multiples mejoras internas y cambios en el README
    - Uso de TypeScript en todo el core

### v.0.26.0
    - Actualización: Webpack 2
    - Corrige: tarea watch con los *.css 
    - Corrige: Rutas con routers

### v.0.25.1
    - Corrige: sd start da error cuando no tiene 3 parametros

### v.0.25.0
    - Añade sd generator para crear una plantilla de plantillas
    - Añade poder usar plantillas locales con sd start [plantilla]
    - Elimina sd component

### v.0.24.3
    - Añade .npmignore
    - Corrige: ignorar scripts de carpetas _*
    - Muestra mensaje de error cuando no encuentra un include {%= %}

### v.0.24.1
    - Cambios en el README

### v.0.24.0
    - Añade plantilla breakout
    - Añade plantilla todomvc
    - Cambios en el README
    - Corrige: assets, no evaluarlos como plantillas
    - Corrige: js, no compila assets
    - Corrige: watch, recarga en .jade

### v.0.23.0
    - Añade plugin transform-decorator-legacy en webpack
    - Añade abreviaturas sd y sdsd en CLI speedseed
    - CHANGELOG dividido en ficheros de idioma
    - Borrado sd typings en CLI speedseed
    - Corrige: Tarea Watch lanzada cuando guardas ficheros _*.*
    - README dividido en ficheros de idioma

### v.0.21.1
    - Corrige: En Unix, error de fichero o directorio no enconrado en CLI speedseed

### v.0.22.0
    - Añade webpack para compiladores de JS
    - Añade uso de import ES6
    - Borra speedseed clean
    - Crear plantillas es ahora más fácil
    - Ficheros precompilan a -tmp
    - Mejorado el uso de jsx y ts
    - speedseed cli ahora muestra el comando interno
    - speedseed component no funciona correctamente

### v.0.21.4
    - Corrige: error en tarea js
    - Corrige: eslint complexity

### v.0.21.3
    - Corrige: Copia assets en tarea dist
    - Corrige: No es requerido añadir siempre las dependencias de Babel
    - Añade alias speedseed i como speedseed install

### v.0.21.2
    - Corrige: speedseed update
    - Añade speedseed en .gitattributes

### v.0.21.1
    - Corrige: README
    - Compila todos los ficheros jade cuando guardas

### v.0.21.0
    - Assets y vendor leídos en app/ en vez de en build/
    - Modificado speedseed clean [dir]
    - Plantillas whitespace añadidas a blacklist
    - Tarea de copiar sólo usada en tarea dist

### v.0.20.6
    - Corrige: ruta de gulp en Unix
    - Añade speedseed help

### v.0.20.5
    - Corrige: En Unix error de fichero o directorio no enconrado en CLI speedseed

### v.0.20.4
    - Actualiza plantillas por defecto

### v.0.20.1
    - Corrige: error cuando lanzamos speedseed start
    - Corrige: README en español actualización:   - Plantilla multi-tic-tac-toe actualizada

### v.0.20.0
    - Add speedseed cli
    - All files and libs core moved to templates
    - Global refactor, more clean in app and templates
    - Multiple changes in README
    - Rename all tasks to speedseed *
    - Rename templates whitespace to cleanly

### v.0.19.0
    - Actualiza http-proxy-middleware a 0.17.0
    - Actualización: gularJS a 1.5.7
    - Actualización: gular2 a 2.0.0-rc.4
    - Actualiza Polymer a 1.6.0
    - Actualiza React a 15.2.1
    - Añade plantilla speedseed-angular2-whitespace
    - Más flexibilid y fácil de cambiar el core-config.json

### v.0.18.1
    - Corrige: llamada a gulp local desde npm run: ./node_modules/gulp/bin/gulp.js a gulp

### v.0.18.0
    - Corrige: .css compila a .tmp, include minificado a jade
    - Corrige: No necesita global gulp
    - Corrige: npm run component en Polymer
    - Añade npm run serve
    - Añade npm run serve-dist
    - Añade template polymer-whitespace
    - Permite configurar el actualizar de los templates: babelrc, bower.json, bowerrc, eslintrc, package.json
    - Toma https://storage.googleapis.com/generators.yeoman.io/cache.json para buscar en plantillas speedseed
    - npm run update también instala bower
    - yo speedseed también obtiene dependencias de la plantilla

### v.0.17.0
    - Corrige: npm run component
    - Corrige: watch en *.spec.js
    - .core-config.json a core-config.js
    - Añade Test en npm run component con AngularJS
    - Añade vendor en propiedad test.files de core-config.js
    - Permite usar Chrome o PhantomJS en Karma
    - Simplifica core-config.js

### v.0.16.0
    - Corrige: npm run test
    - Permite elegir opciones a mostrar en plantillas
    - Primera vez "yo speedseed" instala plantilla, siguientes veces "yo speedseed" actualiza
    - Requiere Node >= 6.0.0
    - Simplifica la creación de plantillas
    - Usa lib speedseed común a todas las plantillas

### v.0.15.5
    - Corrige: no romper la app cuando seleccion de test es no

### v.0.15.4
    - Corrige: añade peticiones post put patch y delete al servidor de mocks
    - Corrige: copiar karma-config.js sin plantilla
    - Corrige: livereload para css

### v.0.15.3
    - Cambia el nombre de la plantilla en selección
    - Css mal escrito no rompe la app

### v.0.15.2
    - Mejor comprobación si fichero es .jade o .html en includes
    - Nombres Project y Component a minúsculas y reemplaza - _ y ' ' para evitar errores

### v.0.15.1
    - Todos los ficheros a 4 espacios, package.json y bower.json 2 espacios
    - Corrige .core-config.js y package.json son generados correctamente
    - Corrige plantilla incluir para ficheros.html
    - Mensaje de error cuando npm run update importa ficheros previos y falla

### v.0.15.0
    - Añade npm run server para lanzar servidor node
    - Corrige tarea de copiar
    - Borra propiedad copiar en .core-config.js
    - Copia dependencies en package.json a -build/vendor
    - Ficheros .file.* compilan en -tmp
    - Modifica {%= include(__dirname, '-nombre.html') %} a {%= include('nombre.html') %}
    - npm run dist no borra ficheros
    - Plantillas separadas de el generador

### v.0.14.2
    - Corrige copiar node_modules en vendor en vez de en vendor/@angular
    - Corrige ignora carpeta -vendor en npm run indent
    - Corrige npm run dist no borra ficheros vendor
    - Corrige buscar propiedades previas en .core-config.json en vez de .core-config.js
    - Borra anterior .core cuando npm run update o yo speedseed

### v.0.14.1
    - Corrige permitir incluir varias plantillas en un mismo fichero
    - Corrige tareas para que no lean la carpeta vendor
    - Corrige tareas dist
    - Requerimientos en README

### v.0.14.0
    - Añadida plantilla para incluir todas las rutas
    - Corrigedo no copiar todos los typings, sólo los de el framework seleccionado
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
    - Corrige los includes de Polymer

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

### v.0.10.2
    - Más variables en core-config.js
    - Por defecto spacesBefore: 2 spacesAfter: 4
    - Por defecto la carpeta de archivos multimedia es assets en dist

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
    - Corrige el README

### v.0.8.0
    - Corrige error en api cuando ruta no existe
    - Corrige incluir plantilla html
    - Corrige watch a ficheros incluidos
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
    - Corrige traducción inglesa
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
    - Corrige y actualiza el Readme
    - Borra npm run ss-init
    - Borra npm run ss-install

### v.0.4.1
    - Corrige copiar karma.conf por karma.conf.js

### v.0.4.0
    - Reinicia el changelog en 2 idiomas
