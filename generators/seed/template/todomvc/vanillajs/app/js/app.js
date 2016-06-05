/*global app, $on */
(() => {
    'use strict'

    class Todo{
        constructor(name) {
            this.storage = new app.Store(name)
            this.model = new app.Model(this.storage)
            this.template = new app.Template()
            this.view = new app.View(this.template)
            this.controller = new app.Controller(this.model, this.view)
        }
    }

    /**
     * Sets up a brand new Todo list.
     *
     * @param {string} name The name of your new to do list.
     */
    // function Todo(name) {
    //     this.storage = new app.Store(name)
    //     this.model = new app.Model(this.storage)
    //     this.template = new app.Template()
    //     this.view = new app.View(this.template)
    //     this.controller = new app.Controller(this.model, this.view)
    // }

    const todo = new Todo('todos-vanillajs')

    const setView = () => todo.controller.setView(document.location.hash)

    $on(window, 'load', setView)
    $on(window, 'hashchange', setView)
})()