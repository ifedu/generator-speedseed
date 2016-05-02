# generator-speedseed
## v.0.5.0

#English
### Templates
- https://github.com/ifedu/speedseed-multi-tic-tac-toe
---

### Seed for projects created with:
- *Tasks*
    - **BabelJs**
    - **Gulp**
---

- *Lints*
    - **Editorconfig**
    - **EsLint**
---

- *Html*
    - **Jade**
---

- *CSS*
    - **Stylus**
---

- *JavaScript*
    - **AngularJS 1.5.5**
    - **jQuery 2.2.3**
---

### Use
- *Once use in the Operating System* => Install libs in the Operating System
    - **npm install gulp -g**
    - **npm install yo -g**
    - **npm install generator-speedseed -g**
---

- *Once use in the project folder* => Launch generator and install dependencies
    - **yo speedseed**
    - **npm install**
---

- *In the project folder*
    - Compile project in _deploy-dev and launch project
    - **npm run ss-deploy**
---
-
    - Compile project minified in _deploy-min and launch project
    - **npm run ss-dist**
---
-
    - Update generator, install dependencies and launch generator
    - **npm run ss-update**
---
-
    - Compile project and launch complexity code test plato
    - **npm run ss-check**
---
-
    - Compile project and launch unit test
    - **npm run ss-test**
---

### Structure
- **-ss** => *don't change this content folder, is updated with generator-speedseed next versions*
- **_deploy** => *code generated with gulp run, contain code of dev transpiled to html, css, es5. Folders and files _*are ignored*
---
- **dev** => *development template*
    - **_components** => *components jade*
    - **css** => *contain .styl files*
    - **js** => *contain .js files write with es6*
    - **views** => *contain .jade files*
    - **__global.js** => *properties inyects to all files .jade*
    - **_index.js** => *properties inyects to file index.jade*
    - **index.jade** => *index of the app*
---

- **.editorconfig** => *list of code rules for the IDE*
- **.eslintrc** => *list of code rules*
- **.gitignore** => *ignore files for git*
- **.yo-rc.json** => *created for yeoman for future updates*
- **gulpfile.js** => *call gulp tasks of -ss*
- **package.json** => *packages of npm and information of the project*
---

#Español
### Plantillas
- https://github.com/ifedu/speedseed-multi-tic-tac-toe
---

### Seed for projects created with:
- *Tareas*
    - **BabelJs**
    - **Gulp**
---

- *Lints*
    - **Editorconfig**
    - **EsLint**
---

- *Html*
    - **Jade**
---

- *CSS*
    - **Stylus**
---

### Uso
- *Usar una vez en el Sistema Operativo*
    - Instala librerías en el Sistema Operativo
    - **npm install gulp -g**
    - **npm install yo -g**
    - **npm install generator-speedseed -g**
---

- *Usar una vez en la carpeta del proyecto*
    - Lanza el generador e instalas las dependencias
    - **yo speedseed**
    - **npm install**
---

- *En la carpeta del proyecto*
    - Compila el proyecto en _deploy-dev y lo lanza
    - **npm run ss-deploy**
---
-
    - Compila el proyecto minificado en _deploy-min y lo lanza
    - **npm run ss-dist**
---
-
    - Actualiza el generador, lo ejecuta e instala las dependencias
    - **npm run ss-update**
---
-
    - Compila el proyecto y lanza test de complejidad de código plato
    - **npm run ss-check**
---
-
    - Compila el proyecto y lanza los test unitarios
    - **npm run ss-test**
---

### Structure
- **-ss** => *no cambiar el contenido de esta carpeta, es actualizado en futuras versiones de generator-speedseed*
- **_deploy** => *código generado con gulp run, contiene código de dev transpilado a html, css, es5. Carpetas y ficheros _* son ignorados*
---
- **dev** => *plantilla de desarrollo*
    - **_components** => *componentes jade*
    - **css** => *contiene  ficheros .styl*
    - **js** => *contiene ficheros .js escritos con es6*
    - **views** => *contiene ficheros .jade*
    - **__global.js** => *propiedades inyectadas a ficheros .jade*
    - **_index.js** => *propiedades inyectadas al fichero index.jade*
    - **index.jade** => *indice de la app*
---

- **.editorconfig** => *lista de reglas de código para el IDE*
- **.eslintrc** => *lista de reglas de código*
- **.gitignore** => *ignora ficheros para git*
- **.yo-rc.json** => *creado por yeoman para futuras actualizaciones*
- **gulpfile.js** => *llama a las tareas de gulp de -ss*
- **package.json** => *paquetes de npm e información del proyecto*