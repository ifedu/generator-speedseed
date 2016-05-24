angular
.module('speedseed')
.component('ssTable', {
    template: `{%= include('app/components/table', 'tpl') %}`,

    controller() {
        this.xo = ''
    }
})