/// <reference path="../../../typings/index.d.ts" />

angular
.module('<%= project %>')
.component('<%= component %>', {
    template: `{%= include('tpl.html') %}`,

    controller() {
    }
})