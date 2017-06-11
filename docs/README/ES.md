### Uso
- *Usar una vez en el Sistema Operativo para instalar librerías globales*
    - **npm i generator-speedseed -g**
    - **npm i [TEMPLATE] -g** (ej: npm i generator-speedsee-multi-tic-tac-toe -g, instala las plantillas generator-speedseed que necesites)
    - Plantillas oficiales
        - [multi-tic-tac-toe](https://www.npmjs.com/package/generator-speedseed-multi-tic-tac-toe) *(updated to v.0.27.0) (plantilla primaria)*
        - [cleanly-angular2-tour-of-heroes](https://www.npmjs.com/package/generator-speedseed-cleanly-angular2-tour-of-heroes) *(updated to v.0.26.0) (plantilla primaria)*
        - [cleanly-breakouts](https://www.npmjs.com/package/generator-speedseed-cleanly-breakouts) *(updated to v.0.26.0) (plantilla primaria)*
        - [cleanly-polymer-get-started](https://www.npmjs.com/package/generator-speedseed-cleanly-polymer-get-started) *(updated to v.0.26.0) (plantilla primaria)*
        - [cleanly-todomvc](https://www.npmjs.com/package/generator-speedseed-cleanly-todomvc) *(updated to v.0.26.0) (plantilla primaria)*

- *Usar una vez en la carpeta del proyecto para lanzar el generador e instalas las dependencias*
    - **sd start [nombre de la plantilla]** -> El tercer parámetro es opcional para poder instalar plantillas locales o privadas. Ej: sd start multi-tic-tac-toe-beta
    - **npm i**

- *En la carpeta del proyecto*
    - **npm start** o **npm run build.dev** -> Compila el proyecto en -build y crea el servidor local
    - **npm run build** -> Compila el proyecto en -build
    - **npm run build.dev.debug** -> Compila el proyecto en -build, crea el servidor local y activa el debugger de nodejs
    - **npm run build.dev.open** -> Compila el proyecto en -build, crea el servidor local y abre el navegador


    - **npm run dist** -> Compila el proyecto en -dist
    - **npm run dist.dev** -> Compila el proyecto en -dist y crea el servidor local
    - **npm run dist.dev.debug** -> Compila el proyecto en -dist, crea el servidor local y activa el debugger de nodejs
    - **npm run dist.dev.open** -> Compila el proyecto en -dist, crea el servidor local y abre el navegador

    - **npm test** -> Compila el proyecto en -build y lanza los test unitarios con PhantomJS
    - **npm test.dev** -> Compila el proyecto en -build, crea el servidor local y lanza los test unitarios con Chrome

    - **sd construct** -> Crea ficheros a partir del ./core y ./config
    - **sd update** -> Usar después de actualizar el generador mediante npm, elimina la carpeta core y crea la actualizada
---

### Características y convenciones
- Test Unitarios deben llamarse *.spec.js
- Los ficheros de JavaScript que se compilan a -build deben llamarse index.js, main.js o *.spec.js, los demás ficheros deben ser incluidos en estos puesto que no se compilarán individualmente a -build
- Se pueden incluir ficheros mediante templating con {%= include('nombre.html') %}
- Permite actualizar el núcleo del proyecto mediante sd update sin afectar al desarrollo del proyecto
- En la línea de comandos se puede usar sd, sdsd o speedseed

---

### Estructura de ficheros
- **-build** -> *Generada con npm run build, contiene código de src/ compilado a html, css, js(es5).*
- **-dist** -> *Generada con npm run dist, contiene código minificado de src/ compilado a html, css, js(es5).*
- **-tmp** -> *Generada intermediaria como ayuda antes de pasar a -build o -dist.*
- **config** -> *Aquí se pueden añadir **tareas a gulp**, **paquetes a npm**, **cambiar rutas** o sobreescribir otros .json de ./core*
    **construct** -> *Añadir paquetes a npm o sobreescribir otros .json de ./core*
    **tasks** -> *Añadir tareas a gulp*
    **paths** -> *Cambiar rutas del core*
- **core** -> *No cambiar el contenido de esta carpeta, es actualizada en futuras versiones de generator-speedseed y sus plantillas*
- **src** -> *Aquí se desarrolla*
    - **assets** -> *Estos ficheros se copian a -dist, en desarrollo se leen directamente desde src sin copiarse a -build*
    - **index.html** -> *Inicio de la página*
    - **main.js** -> *script principal*
- **package.json** -> *No modificarlo, los paquetes se deben añadir en **config/construct/package.ts** y posteriormente hacer **sd construct** para generar este fichero*

---

### Styleguide
- [Guide en español para Jade, JS(ES6) y Stylus](https://github.com/ifedu/cleanly-styleguide)
