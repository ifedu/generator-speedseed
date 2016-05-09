(() => {
    Polymer({
        is: 'td-todos',

        properties: {
            activeCount: {
                computed: '_computeActiveCount(items, items.*)',
                type: Number
            },

            allCompleted: {
                computed: '_computeAllCompleted(anyCompleted, activeCount)',
                type: Boolean
            },

            anyCompleted: {
                computed: '_computeAnyCompleted(items, items.*)',
                type: Boolean
            },

            items: {
                type: Array
            },

            model: {
                type: Object
            },

            modelId: {
                type: String
            },

            route: {
                type: String
            }
        },

        _computeActiveCount(items) {
            return (this.model) ? this.model.getActiveCount() : 0
        },

        _computeAllCompleted(anyCompleted, activeCount) {
            return anyCompleted && !activeCount
        },

        _computeAnyCompleted(items) {
            return (this.model) ? this.model.getCompletedCount() > 0 : false
        },

        _computeItemsLeft(count) {
            return (count < 2) ? 'item' : 'items';
        },

        _computeLinkClass(currRoute, route) {
            return (currRoute === route) ? 'selected' : '';
        },

        addTodoAction() {
            this.model.newItem(this.$['new-todo'].value)
            this.$['new-todo'].value = ''
        },

        attached() {
            this.model = document.querySelector(`#${this.modelId}`)
        },

        cancelAddTodoAction() {
            this.$['new-todo'].value = ''
        },

        clearCompletedAction() {
            this.model.clearCompletedItems()
        },

        destroyItemAction(e, detail) {
            this.model.destroyItem(detail)
        },

        matchesFilter(route) {
            return function(item, index, array) {
                return (this.model) ? this.model.matchesFilter(item, route) : false
            }.bind(this)
        },

        toggleAllCompletedAction(e) {
            this.model.setItemsCompleted(e.target.checked)
        }
    })
})()