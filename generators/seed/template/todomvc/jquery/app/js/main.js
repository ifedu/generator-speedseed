jQuery(($) => {
    Handlebars.registerHelper('eq', function (a, b, options) {
        return a === b ? options.fn(this) : options.inverse(this)
    })

    const ENTER_KEY = 13
    const ESCAPE_KEY = 27

    const util = {
        pluralize(count, word) {
            return (count === 1) ? word : `${word}s`
        },

        store(namespace, data) {
            if (data) {
                return localStorage.setItem(namespace, JSON.stringify(data))
            }

            const store = localStorage.getItem(namespace)

            return (store && JSON.parse(store)) || []
        },

        uuid() {
            let uuid = ''

            for (let i = 0; i < 32; i++) {
                let random = Math.random() * 16 | 0

                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-'
                }

                uuid += ((i === 12)
                    ? 4
                    : ((i === 16)
                        ? (random & 3 | 8)
                        : random
                    )
                )
                .toString(16)
            }

            return uuid
        }
    }

    const App = {
        bindEvents() {
            $('#new-todo').on('keyup', this.create.bind(this))

            $('#toggle-all').on('change', this.toggleAll.bind(this))

            $('#footer').on('click', '#clear-completed', this.destroyCompleted.bind(this))

            $('#todo-list')
            .on('change', '.toggle', this.toggle.bind(this))
            .on('dblclick', 'label', this.edit.bind(this))
            .on('keyup', '.edit', this.editKeyup.bind(this))
            .on('focusout', '.edit', this.update.bind(this))
            .on('click', '.destroy', this.destroy.bind(this))
        },

        create(e) {
            const $input = $(e.target)
            const val = $input.val().trim()

            if (e.which !== ENTER_KEY || !val) {
                return
            }

            this.todos.push({
                completed: false,
                id: util.uuid(),
                title: val
            })

            $input.val('')

            this.render()
        },

        destroy(e) {
            this.todos.splice(this.indexFromEl(e.target), 1)
            this.render()
        },

        destroyCompleted() {
            this.todos = this.getActiveTodos()
            this.filter = 'all'
            this.render()
        },

        edit(e) {
            const $input = $(e.target)
                .closest('li')
                .addClass('editing')
                .find('.edit')

            $input
            .val($input.val())
            .focus()
        },

        editKeyup(e) {
            if (e.which === ENTER_KEY) {
                e.target.blur()
            }

            if (e.which === ESCAPE_KEY) {
                $(e.target).data('abort', true).blur()
            }
        },

        getActiveTodos() {
            return this.todos.filter((todo) => !todo.completed)
        },

        getCompletedTodos() {
            return this.todos.filter((todo) => todo.completed)
        },

        getFilteredTodos() {
            if (this.filter === 'active') {
                return this.getActiveTodos()
            }

            if (this.filter === 'completed') {
                return this.getCompletedTodos()
            }

            return this.todos
        },
        // accepts an element from inside the `.item` div and
        // returns the corresponding index in the `todos` array
        indexFromEl(el) {
            const id = $(el).closest('li').data('id')
            const todos = this.todos
            let i = todos.length

            while (i--) {
                if (todos[i].id === id) {
                    return i
                }
            }
        },

        init() {
            this.todos = util.store('todos-jquery')
            this.todoTemplate = Handlebars.compile($('#todo-template').html())
            this.footerTemplate = Handlebars.compile($('#footer-template').html())

            this.bindEvents()

            new Router({
                '/:filter': function (filter) {
                    this.filter = filter
                    this.render()
                }.bind(this)
            }).init('/all')
        },

        render() {
            const todos = this.getFilteredTodos()

            $('#todo-list').html(this.todoTemplate(todos))
            $('#main').toggle(todos.length > 0)
            $('#toggle-all').prop('checked', this.getActiveTodos().length === 0)

            this.renderFooter()

            $('#new-todo').focus()

            util.store('todos-jquery', this.todos)
        },

        renderFooter() {
            const todoCount = this.todos.length
            const activeTodoCount = this.getActiveTodos().length
            const template = this.footerTemplate({
                activeTodoCount,

                activeTodoWord: util.pluralize(activeTodoCount, 'item'),
                completedTodos: todoCount - activeTodoCount,
                filter: this.filter
            })

            $('#footer').toggle(todoCount > 0).html(template)
        },

        toggleAll(e) {
            const isChecked = $(e.target).prop('checked')

            this.todos.forEach((todo) => todo.completed = isChecked)

            this.render()
        },

        toggle(e) {
            const i = this.indexFromEl(e.target)

            this.todos[i].completed = !this.todos[i].completed
            this.render()
        },

        update(e) {
            const el = e.target
            const $el = $(el)
            const val = $el.val().trim()

            if (!val) {
                this.destroy(e)

                return
            }

            if ($el.data('abort')) {
                $el.data('abort', false)
            } else {
                this.todos[this.indexFromEl(el)].title = val
            }

            this.render()
        }
    }

    App.init()
})