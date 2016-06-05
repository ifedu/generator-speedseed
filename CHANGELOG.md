# English
## v.0.11.1
    - Fix Polymer includes

## v.0.11.0
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

## v.0.10.2
    - More variables in core-config.js
    - Default spacesBefore: 2 spacesAfter: 4
    - Default folder multimedia files is assets in dist

## v.0.10.1
    - Default folder multimedia files is assets

## v.0.10.0
    - Add Bower
    - Add Polymer Vulcanize, with external files minimizied!
    - Add npm run ss-indent for indent files 
    - Add VanillaJS
    - In .build vendor to _vendor
    - More config in core-config.js

## v.0.9.0
    - Add npm run ss-component for create component
    - Change template <%= to {%=
    - Use BrowserSync for livereload

## v.0.8.1
    - Fix README

## v.0.8.0
    - Allow choice SaSS, ScSS, LeSS or Stylus
    - Allow configure port reload and route api server
    - Error to compile no crash app
    - Fix error in api when route not exist
    - Fix include template html
    - Fix watch a includes files
    - No need recompile for new files
    - Values for default in yo speedseed

## v.0.7.1
    - Update directories in README

## v.0.7.0
    - Add Karma and allow choice Jasmine or Mocha
    - Allow work without jade
    - Change ---* to .*
    - Change name tasks
    - Change folder names
    - Posibility change name folders
    - Update README

## v.0.6.0
    - ---*.js ---*.html ---*.css for precompile files in dev
    - Add Polymer and React
    - Add template based TodoMVC
    - Change in the Generator
    - Fix translate English
    - Rename files index to main

## v.0.5.3
    - Change in Yeoman structure
    - Yeoman no show question Library / Framework? if question Template? is No

## v.0.5.2
    - Add description of the properties speedseed
    - Description only in package.json

## v.0.5.1
    - Improvements in the README

## v.0.5.0
    - Add selection framework
    - Add selection template
    - Delete npm run ss-init
    - Delete npm run ss-install
    - Fix and update Readme

## v.0.4.1
    - Fix copy karma.conf by karma.conf.js

## v.0.4.0
    - Restart changelog in 2 languages

# Español
## v.0.11.1
    - Arregla los includes de Polymer

## v.0.11.0
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

## v.0.10.1
    - Por defecto la carpeta de archivos multimedia es assets

## v.0.10.0
    - Añade Bower
    - Añade Polymer Vulcanize, ¡con ficheros externos minimizados!
    - Añade npm run ss-indent para identar ficheros
    - Añade VanillaJS
    - En .build vendor a _vendor
    - Más configuración en core-config.js

## v.0.9.0
    - Añade npm run ss-component para crear componente
    - Cambia template <%= a {%=
    - Usa BrowserSync para livereload

## v.0.8.1
    - Arregla el README

## v.0.8.0
    - Arregla error en api cuando ruta no existe
    - Arregla incluir plantilla html
    - Arregla watch a ficheros incluidos
    - Error al compilar no rompe la app
    - No necesita precompilar para nuevos ficheros
    - Permite configurar puerto reload y ruta del servidor api
    - Permite elegir SaSS, ScSS, LeSS o Stylus
    - Valores por defecto en yo speedseed

## v.0.7.1
    - Actualiza directorios en README

## v.0.7.0
    - Actualiza README
    - Añade Karma y permite elegir Jasmine o Mocha
    - Cambia ---* por .*
    - Cambia el nombre de las tareas
    - Cambia nombres de carpetas
    - Permite trabajar sin jade
    - Posibilidad de cambiar el nombre de las carpetas

## v.0.6.0
    - ---*.js ---*.html ---*.css para precompilar ficheros en dev
    - Añade Polymer y React
    - Aaña plantilla basada en TodoMVC
    - Arregla traducción inglesa
    - Cambios en el Generador
    - Renombra ficheros index a main

## v.0.5.3
    - Cambios en estructura de yeoman
    - Yeoman no muestra pregunta Library / Framework? si la pregunta Template? es No

## v.0.5.2
    - Añade descripció de las propiedades de speedseed
    - Descripción sólo en package.json

## v.0.5.1
    - Mejoras en el README

## v.0.5.0
    - Añade selección de framework
    - Añade selección de plantilla
    - Arregla y actualiza el Readme
    - Borra npm run ss-init
    - Borra npm run ss-install

## v.0.4.1
    - Arregla copiar karma.conf por karma.conf.js

## v.0.4.0
    - Reinicia el changelog en 2 idiomas