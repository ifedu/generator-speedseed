angular
.module('speedseed')
.component('ssBox', {
    templateUrl: './components/box/index.html',

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