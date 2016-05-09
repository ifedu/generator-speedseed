let app = app || {};

(() => {
    const Utils = app.Utils
    // Generic "model" object. You can use whatever
    // framework you want. For this application it
    // may not even be worth separating this logic
    // out, but we do this to demonstrate one way to
    // separate out parts of your application.
    app.TodoModel = function (key) {
        this.key = key
        this.todos = Utils.store(key)
        this.onChanges = []
    }

    app.TodoModel.prototype.addTodo = function (title) {
        this.todos = this.todos.concat({
            title,

            completed: false,
            id: Utils.uuid()
        })

        this.inform()
    }

    app.TodoModel.prototype.clearCompleted = function () {
        this.todos = this.todos.filter((todo) => !todo.completed)

        this.inform()
    }

    app.TodoModel.prototype.destroy = function (todo) {
        this.todos = this.todos.filter((candidate) => candidate !== todo)

        this.inform()
    }

    app.TodoModel.prototype.inform = function () {
        Utils.store(this.key, this.todos)

        this.onChanges.forEach((cb) => cb())
    }

    app.TodoModel.prototype.save = function (todoToSave, text) {
        this.todos = this.todos.map((todo) =>
            (todo !== todoToSave)
                ? todo
                : Utils.extend({}, todo, {title: text}))

        this.inform()
    }

    app.TodoModel.prototype.subscribe = function (onChange) {
        this.onChanges.push(onChange)
    }

    app.TodoModel.prototype.toggle = function (todoToToggle) {
        this.todos = this.todos.map((todo) =>
            (todo !== todoToToggle)
                ? todo
                : Utils.extend({}, todo, {completed: !todo.completed})
        )

        this.inform()
    }

    app.TodoModel.prototype.toggleAll = function (checked) {
        // Note: it's usually better to use immutable data structures since they're
        // easier to reason about and React works very well with them. That's why
        // we use map() and filter() everywhere instead of mutating the array or
        // todo items themselves.
        this.todos = this.todos.map((todo) => Utils.extend({}, todo, {completed: checked}))

        this.inform()
    }
})()