/// <reference path="../../../typings/index.d.ts" />

angular
.module('speedseed')
.component('ssTable', {
    template: `{%= include(__dirname, '-tpl.html') %}`,

    controller() {
        this.xo = ''
    }
})