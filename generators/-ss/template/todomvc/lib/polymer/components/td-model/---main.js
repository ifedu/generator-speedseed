(() => {
    Polymer({
        is: 'td-model',

        filters: {
            active: (item) => !item.completed,
            completed: (item) => item.completed
        },

        hostAttributes: {
            hidden: true
        },

        properties: {
            items: {
                type: Array,
                notify: true
            },
            filter: {
                type: String
            }
        },

        _initializeDefaultTodos() {
            this.items = [];
        },

        clearCompletedItems() {
            this.items = this.items.filter(this.filters.active)
        },

        destroyItem(item) {
            const i = this.items.indexOf(item)

            if (i > -1) {
                this.splice('items', i, 1)
            }
        },

        getCompletedCount() {
            return (this.items) ? this.items.filter(this.filters.completed).length : 0
        },

        getActiveCount() {
            return (this.items) ? (this.items.length - this.getCompletedCount(this.items)) : 0
        },

        matchesFilter(item, filter) {
            const fn = this.filters[filter]

            return (fn) ? fn(item) : true
        },

        newItem(title) {
            title = String(title).trim()

            if (!title) {
                return
            }

            this.push('items', {title: title, completed: false})
        },

        setItemsCompleted(completed) {
            for (let i = 0; i < this.items.length; ++i) {
                this.set(['items', i, 'completed'], completed)
            }
        }
    })
})()