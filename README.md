## generator-speedseed
## v.0.2.7

### Seed for projects created with:
- *Tasks*
    - **BabelJs**
    - **Gulp**

- *Html*
    - **Jade**

- *CSS*
    - **Stylus**

### Use
- *Once*
    - **npm install gulp -g**
    - **npm install yo -g**
    - **npm install generator-speedseed -g**

- *In the project*
    - **yo speedseed**
    - **npm install**

- *Launch project*
    - **gulp run**

### Structure
- **-ss** - *don't change this content folder, is updated with generator-speedseed next versions*
- **_deploy** - *code generated with gulp run, contain code of dev transpiled to html, css, es5. Folders and files _*are ignored*
- **dev** - *scaffolding basic*
    - **_components** *components jade*
    - **css** - *contain .styl files*
    - **js** - *contain .js files write with es6*
    - **views** - *contain .jade files*
    - **__global.js** - *properties inyects to all files .jade*
    - **_index.js** - *properties inyects to file index.jade*
    - **index.jade** - *index of the page*

- **.editorconfig** - *list of code rules for the ide*
- **.eslintrc** - *list of code rules*
- **.gitignore** - *ignore files for git*
- **.yo-rc.json** - *created for yeoman for future updates*
- **gulpfile.js** - *call gulp tasks of -ss*
- **package.json** - *packages of npm*