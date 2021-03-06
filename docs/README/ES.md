### Uso
- *Usar una vez en el Sistema Operativo para instalar librerías globales*
    - **npm i yo -g**
    - **npm i generator-speedseed -g**
    - **npm i [TEMPLATE] -g** (ej: **npm i generator-speedseed-multi-tic-tac-toe -g**, instala las plantillas generator-speedseed que necesites)
    - Plantillas oficiales
        - [multi-tic-tac-toe](https://www.npmjs.com/package/generator-speedseed-multi-tic-tac-toe)
- *Usar una vez en la carpeta del proyecto para lanzar el generador e instalas las dependencias*
    - **sd start [nombre de la plantilla]** -> El tercer parámetro es opcional para poder instalar plantillas locales o privadas. Ej: sd start multi-tic-tac-toe-beta
    - **npm i**
- *En la carpeta del proyecto*
    - *común*
        - **npm start** o **npm run build.dev** -> Compila el proyecto en -build y crea el servidor local
        - **npm run build** -> Compila el proyecto en -build
        - **npm run build.dev.debug** -> Compila el proyecto en -build, crea el servidor local y activa el debugger de nodejs
        - **npm run build.dev.open** -> Compila el proyecto en -build, crea el servidor local y abre el navegador
        - **npm run dist** -> Compila el proyecto en -dist
        - **npm run dist.dev** -> Compila el proyecto en -dist y crea el servidor local
        - **npm run dist.dev.debug** -> Compila el proyecto en -dist, crea el servidor local y activa el debugger de nodejs
        - **npm run dist.dev.open** -> Compila el proyecto en -dist, crea el servidor local y abre el navegador
    - *test*
        - **npm run test** -> Compila el proyecto en -build y lanza los test unitarios con PhantomJS
        - **npm run test.dev** -> Compila el proyecto en -build, crea el servidor local y lanza los test unitarios con Chrome
    - *electron*
        - **npm run electron.dev** "Compila los ficheros, lee ./-electron/index.js y lanza electron",
        - **npm run electron.dist** "Compila los ficheros para distribución, lee ./-electron/index.js y lanza electron",
        - **npm run electron.run** "Lee ./-electron/index.js y lanza electron",
        - **npm run electron.packager** "Crea el ejecutable con los archivos de ./electron"
        - **npm run electron.packager.dev** "Compila el proyecto en -build y lo copia a ./electron, crea el ejecutable con los archivos de ./electron"
        - **npm run electron.packager.dist** "Compila el proyecto en -dist y lo copia a ./electron, crea el ejecutable con los archivos de ./electron"
    - *speedseed*
        - **sd construct** -> Crea ficheros a partir del ./core y ./config *se ejecuta automáticamente en preinstall*
        - **sd update** -> Usar después de actualizar el generador mediante npm, elimina la carpeta core y crea la actualizada

---

### Características y convenciones
- Test Unitarios deben llamarse *.spec.js
- Los ficheros de JavaScript que se compilan a -build deben llamarse *index.js, *main.css o *.spec.js, los demás ficheros deben ser incluidos en estos puesto que no se compilarán individualmente a -build
- Permite actualizar el núcleo del proyecto mediante sd update sin afectar al desarrollo del proyecto
- En la línea de comandos se puede usar sd o speedseed

---

### Estructura de ficheros
- **-build** -> *Generada con npm run build, contiene código de src/ compilado a html, css, js(es5).*
- **-dist** -> *Generada con npm run dist, contiene código minificado de src/ compilado a html, css, js(es5).*
- **config** -> *Aquí se pueden añadir **tareas a gulp**, **paquetes a npm**, **cambiar rutas** o sobreescribir otros .json de ./core*
    **construct** -> *Añadir paquetes a npm o sobreescribir otros .json de ./core*
    **tasks** -> *Añadir tareas a gulp*
    **paths** -> *Cambiar rutas del core*
    **webpack.options** -> *Cambia o añade opciones a Webpack*s
- **core** -> *No cambiar el contenido de esta carpeta, es actualizada en futuras versiones de generator-speedseed y sus plantillas*
- **electron-src** -> *Archivos principales de electron, contiene lo que se va empaquetar*
    - **-electron** -> *Generada con npm run electron.**
- **src** -> *Aquí se desarrolla*
    - **assets** -> *Estos ficheros se copian a -dist, en desarrollo se leen directamente desde src sin copiarse a -build*
    - **index.html** -> *Inicio de la página*
    - **main.js** -> *script principal*
- **typings** -> Archivos de definiciones para TypeScript
- **package.json** -> *No modificarlo, los paquetes se deben añadir en **config/construct/package.ts** y posteriormente hacer **sd construct** para generar este fichero*

---

### Guía de estilos
- [Guía en español para Jade, JS(ES6) y Stylus](https://github.com/ifedu/cleanly-styleguide)
