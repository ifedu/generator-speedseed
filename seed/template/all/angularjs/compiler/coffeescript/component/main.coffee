angular
.module('<%= project %>')
.component('<%= component %>', {
    template: '{%= include("tpl.html") %}',

    controller: () ->
})