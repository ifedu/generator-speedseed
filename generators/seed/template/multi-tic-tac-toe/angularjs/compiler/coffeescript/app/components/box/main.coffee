angular
.module('speedseed')
.component('ssBox', {
    template: '{%= include(__dirname, "-tpl.html") %}',

    require: {
        'ssTable': '^ssTable',
    },

    controller: () ->
        self = this

        this.push = () ->
            self.ssTable.xo = if (self.ssTable.xo == 'O') then 'X' else 'O'

            self.xo = self.ssTable.xo

        true
})