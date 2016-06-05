angular
.module('speedseed')
.component('ssBox', {
    template: `{%= include(__dirname, '-tpl.html') %}`,

    require: {
        'ssTable': '^ssTable',
    },

    controller() {
        this.push = () => {
            this.ssTable.xo = (this.ssTable.xo === 'O') ? 'X' : 'O'

            this.xo = this.ssTable.xo
        }
    }
})