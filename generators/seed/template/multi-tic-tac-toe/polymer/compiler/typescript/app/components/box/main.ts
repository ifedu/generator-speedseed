/// <reference path="../../../typings/index.d.ts" />

(() => {
let xo = 'O'

Polymer({
    is: 'ss-box',

    properties: {
        xo: {
            value: ''
        }
    },

    push (e) {
        xo = (xo === 'O') ? 'X' : 'O'

        this.xo = xo
    }
})
})()