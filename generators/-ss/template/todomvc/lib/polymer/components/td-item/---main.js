(() => {
    Polymer({
        extends: 'li',
        is: 'td-item',

        observers: ['setHostClass(item.completed, editing)'],

        properties: {
            editing: {
                type: Boolean,
                value: false
            },
            item: {
                type: Object,
                value() { return {} }
            }
        },

        _cancelAction() {
            this.editing = false
        },

        _commitAction() {
            if (this.editing) {
                this.editing = false
                this.set('item.title', this._editingValue.trim())

                if (this.item.title === '') {
                    this._destroyAction()
                }
            }
        },

        _destroyAction() {
            this.fire('td-destroy-item', this.item)
        },

        _editAction() {
            this.editing = true
            this._editingValue = this.item.title
            // Wait one tick template to stamp.
            this.async(function () {
                this.querySelector('#edit').focus()
            })
        },

        _onBlur() {
            this._commitAction()
            this.editing = false
        },

        setHostClass(completed, editing) {
            // Note: TodoMVC has styling for classes. Too bad we can't use the
            // editing property and reflectToAttribute.
            this.toggleClass('completed', completed)
            this.toggleClass('editing', editing)
        }
    })
})()