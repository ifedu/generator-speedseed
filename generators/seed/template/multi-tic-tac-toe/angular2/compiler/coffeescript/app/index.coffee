/// <reference path="../typings/index.d.ts" />

((global) => {
    const index = { main: 'index.js' }

    System.config({
        map: {
            'app': './',
            'rxjs': 'vendor/rxjs',
            'angular2-in-memory-web-api': 'vendor/angular2-in-memory-web-api',

            '@angular': 'vendor/@angular'
        },

        packages: {
            'app': { main: 'js/main.js' },
            'angular2-in-memory-web-api': index,

            '@angular/common': index,
            '@angular/compiler': index,
            '@angular/core': index,
            '@angular/http': index,
            '@angular/platform-browser': index,
            '@angular/platform-browser-dynamic': index,
            '@angular/router': index
        }
    })

    System.import('app').catch((err) => console.error(err))
})(this)