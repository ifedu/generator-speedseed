angular
.module('<%= project %>')
.component('<%= component %>', {
    template: `{%= include('app/components/<%= component %>', 'tpl') %}`,

    controller() {
    }
})