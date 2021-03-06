### Use
- *Use once in the Operating System to install global libs*
    - **npm i yo -g**
    - **npm i generator-speedseed -g**
    - **npm i [TEMPLATE] -g** (ej: **npm i generator-speedseed-multi-tic-tac-toe -g**, install the generator-speedseed templates you need)
    - Official Templates
        - [multi-tic-tac-toe](https://www.npmjs.com/package/generator-speedseed-multi-tic-tac-toe)
- *Use once in the project folder to launch the generator and install dependencies*
    - **sd start [template name]** -> The third parameter is optional in order to install local or private templates. Ex: sd start multi-tic-tac-toe-beta
    - **npm i**
- *In the project folder*
    - *common*
        - **npm start** o **npm run build.dev** -> Compile the project in -build and create the local server
        - **npm run build** -> Compile the project in -build
        - **npm run build.dev.debug** -> Compila el proyecto en -build, crea el servidor local y activa el debugger de nodejs
        - **npm run build.dev.open** -> Compila el proyecto en -build, crea el servidor local y abre el navegador
        - **npm run dist** -> Compile the project in -dist
        - **npm run dist.dev** -> Compile the project in -dist and create the local server run dist
        - **npm run dist.dev.debug** -> Compile the project in -build, create the local server and activate the nodejs debugger
        - **npm run dist.dev.open** -> Compile the project in -build, create the local server and open the browser
    - *test*
        - **npm run test** -> Compile the project in -build and launch the unitary tests with PhantomJS
        - **npm run test.dev** -> Compile the project in -build, create the local server and launch the unitary tests with Chrome
    - *electron*
        - **npm run electron.dev** "Compile the files, read ./-electron/index.js and launch electron",
        - **npm run electron.dist** "Compiles files for distribution, read ./-electron/index.js and launch electron",
        - **npm run electron.run** "Read ./-electron/index.js and launch electron",
        - **npm run electron.packager** "Create the executable with ./electron files"
        - **npm run electron.packager.dev** "Compile the project in -build and copy it to ./electron, create the executable with ./electron files"
        - **npm run electron.packager.dist** "Compiles the project into -dist and copies it to ./electron, creates the executable with ./electron files"
    - *speedseed*
        - **sd construct** -> Create files from. /core and. /config *runs automatically on preinstall*
        - **sd update** -> Use after updating the generator with npm, deletes the core folder and creates the updated one

---

### Features and conventions
- Unitary tests should be called *. spec. js
- JavaScript files that are compiled to -build should be called index.js, main.css or *. spec.js, the other files should be included in these since they will not be compiled individually to -build
- Allows you to update the project kernel using sd update without affecting the development of the project
- In the command line you can use sd, sdsd or speedseed

---

### File structure
- **-build** -> *Generated with npm run build, it contains src/ code compiled to html, css, js (es5).*
- **-dist** -> *Generated with npm run dist, contains src/ compiled to html, css, js (es5) mined code.*
- **config** -> *Here you can add **tasks to gulp**, **packages to npm**, **change routes** or overwrite others .json of ./core*
    **construct** -> *Add packages to npm or overwrite others .json of ./core*
    **tasks** -> *Add tasks to gulp*
    **paths** -> *Change core routes*
    **webpack.options** -> *Change or add options to Webpack*
- **core** -> *Do not change the contents of this folder, it is updated in future versions of generator-speedseed and its templates*
- **electron-src** -> *Main electron files, contains what is to be packaged*
    - **-electron** -> *Generated with npm run electron.**
- **src** -> *Here it develops*
    - **assets** -> *These files are copied to -dist, under development are read directly from src without being copied to -build*
    - **index.html** -> *Start of page*
    - **main.js** -> *main script*
- **typings** -> TypeScript Definition Files
- **package.json** -> *No modification, packages must be added in **config/construct/package.ts** and then make **sd construct** to generate this file*

---

### Styleguide
- [Guide in spanish for Jade, JS(ES6) and Stylus](https://github.com/ifedu/cleanly-styleguide)
