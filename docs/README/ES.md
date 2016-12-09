### Use
- *Usar una vez en el Sistema Operativo para instalar librerías globales*
    - **npm i generator-speedseed -g**
    - **sd i -g**
    - **npm i [TEMPLATE] -g** (template multi-tic-tac-toe, instala las plantillas generator-speedseed que necesites)
    - Plantillas oficiales
        - [cleanly-angular2-tour-of-heroes](https://www.npmjs.com/package/generator-speedseed-cleanly-angular2-tour-of-heroes)
        - [cleanly-breakouts](https://www.npmjs.com/package/generator-speedseed-cleanly-breakouts)
        - [cleanly-polymer-get-started](https://www.npmjs.com/package/generator-speedseed-cleanly-polymer-get-started)
        - [cleanly-todomvc](https://www.npmjs.com/package/generator-speedseed-cleanly-todomvc)
        - [multi-tic-tac-toe](https://www.npmjs.com/package/generator-speedseed-multi-tic-tac-toe)

- *Usar una vez en la carpeta del proyecto para lanzar el generador e instalas las dependencias*
    - **sd start**
    - **sd i**

- *En la carpeta del proyecto*
    - **sd build** -> Compila el proyecto en -build y lo lanza
    - **sd build open** -> Compila el proyecto en -build, lo lanza y abre el navegador

    - **sd dist** -> Compila el proyecto minificado en -dist
    - **sd dist open** -> Compila el proyecto minificado en -dist, lo lanza y abre el navegador

    - **sd serve** -> Lanza el server -build
    - **sd serve dist** -> Lanza el server -dist

    - **sd update** -> Actualiza el generador, lo ejecuta e instala las dependencias

    - **sd component** -> Crea un componente en app/components

    - **sd spec** -> Compila el proyecto en -build y lanza los test unitarios

    - **sd indent** -> Identa todos los ficheros elegidos, configurable en core-config.js

    - **sd reports** -> Compila el proyecto en -reports y lanza test de complejidad de código plato

---

### Características y convenciones
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

### Estructura
- **.core** => *no cambiar el contenido de esta carpeta, es actualizado en futuras versiones de generator-speedseed*
- **-build** => *código generado con npm run build, contiene código de app/ transpilado a html, css, js(es5). Carpetas y ficheros _* son ignorados*
- **-dist** => *código generado con npm run dist, contiene código minificado de app/ transpilado a html, css, js(es5). Carpetas y ficheros _* son ignorados*

---

- **app** => *plantilla de desarrollo*
    - **-vendor** => *libs externas*
    - **assets** => *ficheros a copiar, no a compilar*
    - **components** => *componentes*
        - **_mixins.jade** => *incluye todos los mixins*
        - **components** => *incluye todos los css*
    - **css** => *contiene ficheros css*
    - **js** => *contiene ficheros js*
    - **__global.js** => *propiedades inyectadas a ficheros .jade*
    - **_index.js** => *propiedades inyectadas al fichero index.jade*
    - **index.jade** => *indice de la app*

---

- **.core-config** => *rutas del proyectos*
- **.yo-rc.json** => *creado por yeoman para futuras actualizaciones*

---

### Styleguide
- [Guide en español para Jade, JS(ES6) y Stylus](https://github.com/ifedu/cleanly-styleguide)