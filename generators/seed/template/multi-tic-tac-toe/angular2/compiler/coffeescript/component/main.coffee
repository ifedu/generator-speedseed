import { Component } from '@angular/core'

@Component({
    selector: '<%= component %>',
    template: `{%= include(__dirname, '-tpl.html') %}`
})

export class <%= component %> {}