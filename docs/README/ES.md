- *Características y convenciones*
    - Test Unitarios deben llamarse *.spec.js
    - Ficheros y carpetas que empiezan por _ no se compilan a build, usado para incluir propiedades o includes nativos
    - Ficheros con .*.* precompilan en .tmp, usado para incluir ficheros mediante el templating {%= %}
        - {%= include('nombre.html') %} para ficheros .*.* o *.* si no tienen que compilarse como nombre.html, nombre.css

    - Permite incluir rutas de componentes, perfecto para automatizar incluir todos los componentes
        - Sintaxis: {%= getRoutes(rutaCarpeta, ext, (Boolean incluye _files), `$TPL$ reemplazado por ruta`, 'identación') %}
        - Ejemplo: {%= getRoutes('components', '.js', false, `script(src='$TPL$')`, '            ') %}
        - Ejemplo: {%= getRoutes('../components', '.styl', true, `@import '$TPL$'`) %}

    - Permite actualizar el núcleo del proyecto mediante npm run update sin afectar al desarrollo del proyecto
    - Propiedades globales para nuestros jades con __global.js
    - Propiedades locales para nuestros jades con nombre.jade _nombre.js
    - En la línea de comandos se puede usar sd, sdsd o speedseed

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
        - **Webpack**

    ---

    - *Lints*
        - **Editorconfig**
        - **EsLint**

    ---

## Guía de estilos
- https://github.com/ifedu/speedseed-styleguide Guía en español para Jade, JS(ES6) y Stylus

---

## Instrucciones de uso
- *Usar una vez en el Sistema Operativo*
    - Instala librerías en el Sistema Operativo
    - **npm i generator-speedseed -g**
    - **sd i -g**
    - **npm i generator-speedseed-multi-tic-tac-toe -g** (template multi-tic-tac-toe, instala las templates que necesites)

---

- *Usar una vez en la carpeta del proyecto*
    - Lanza el generador e instalas las dependencias
    - **sd start**
    - **sd install**

---

- *En la carpeta del proyecto*
    - Compila el proyecto en -build y lo lanza
    - **sd build**

    ---
    - Compila el proyecto en -build, lo lanza y abre el navegador
    - **sd build open**

    ---
    - Compila el proyecto minificado en -dist
    - **sd dist**

    ---
    - Compila el proyecto minificado en -dist, lo lanza y abre el navegador
    - **sd dist open**

    ---
    - Lanza el server -build
    - **sd serve**

    ---
    - Lanza el server -dist
    - **sd serve dist**

    ---
    - Actualiza el generador, lo ejecuta e instala las dependencias
    - **sd update**

    ---
    - Crea un componente en app/components
    - **sd component**

    ---
    - Compila el proyecto en -build y lanza los test unitarios
    - **sd spec**

    ---
    - Identa todos los ficheros elegidos, configurable en core-config.js
    - **sd indent**

    ---
    - Compila el proyecto en -reports y lanza test de complejidad de código plato
    - **sd reports**

---

## Estructura
- **.core** => *no cambiar el contenido de esta carpeta, es actualizado en futuras versiones de generator-speedseed*
- **-build** => *código generado con npm run build, contiene código de app/ transpilado a html, css, js(es5). Carpetas y ficheros _* son ignorados*
- **-dist** => *código generado con npm run dist, contiene código minificado de app/ transpilado a html, css, js(es5). Carpetas y ficheros _* son ignorados*

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

- **.core-config** => *rutas del proyecto*
- **.yo-rc.json** => *creado por yeoman para futuras actualizaciones*