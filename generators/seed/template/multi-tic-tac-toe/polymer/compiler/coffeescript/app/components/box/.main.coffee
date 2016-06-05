xo = 'O'

Polymer({
    is: 'ss-box',

    properties: {
        xo: {
            value: ''
        }
    },

    push: (e) ->
        xo = if (xo == 'O') then 'X' else 'O'

        this.xo = xo
})