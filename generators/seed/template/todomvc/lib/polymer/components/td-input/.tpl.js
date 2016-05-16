(() => {
    const ENTER_KEY = 13
    const ESC_KEY = 27

    Polymer({
        is: 'td-input',

        extends: 'input',

        listeners: {
            'keyup': '_keyupAction',
            'keypress': '_keypressAction'
        },

        _keypressAction(e, detail, sender) {
            // Listen for enter on keypress but esc on keyup, because
            // IE doesn't fire keyup for enter.
            if (e.keyCode === ENTER_KEY) {
                this.fire('td-input-commit')
            }
        },

        _keyupAction(e, detail, sender) {
            if (e.keyCode === ESC_KEY) {
                this.fire('td-input-cancel')
            }
        }
    })
})()