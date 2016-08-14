import { Component } from '@angular/core'

@Component({
    selector: '<%= component %>',
    template: `{%= include('tpl.html') %}`
})

export class <%= component %> {}