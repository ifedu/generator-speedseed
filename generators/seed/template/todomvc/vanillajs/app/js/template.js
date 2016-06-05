/*jshint laxbreak:true */
((window) => {
    'use strict'

    const htmlEscapes = {
        '&': '&amp',
        '<': '&lt',
        '>': '&gt',
        '"': '&quot',
        '\'': '&#x27',
        '`': '&#x60'
    }

    const escapeHtmlChar = (chr) => htmlEscapes[chr]

    const reUnescapedHtml = /[&<>"'`]/g
    const reHasUnescapedHtml = new RegExp(reUnescapedHtml.source)

    const escape = (string) =>
        (string && reHasUnescapedHtml.test(string))
            ? string.replace(reUnescapedHtml, escapeHtmlChar)
            : string

    class Template {
        constructor() {
            this.defaultTemplate = `
               <li data-id="{{id}}" class="{{completed}}">
                   <div class="view">
                       <input class="toggle" type="checkbox" {{checked}}>
                       <label>{{title}}</label>
                       <button class="destroy"></button>
                   </div>
               </li>`
        }

        clearCompletedButton(completedTodos) {
            return (completedTodos > 0)
                ? 'Clear completed'
                : ''
        }

        itemCounter(activeTodos) {
            const plural = activeTodos === 1 ? '' : 's'

            return `<strong>${activeTodos}</strong> item${plural} left`
        }

        show(data) {
            let view = ''

            for (let i = 0, l = data.length; i < l; i++) {
                let checked = ''
                let completed = ''
                let template = this.defaultTemplate

                if (data[i].completed) {
                    completed = 'completed'
                    checked = 'checked'
                }

                template = template.replace('{{id}}', data[i].id)
                template = template.replace('{{title}}', escape(data[i].title))
                template = template.replace('{{completed}}', completed)
                template = template.replace('{{checked}}', checked)

                view = view + template
            }

            return view
        }
    }

    /**
     * Sets up defaults for all the Template methods such as a default template
     *
     * @constructor
     */
    // function Template() {
    //     this.defaultTemplate
    //     =   '<li data-id="{{id}}" class="{{completed}}">'
    //     +       '<div class="view">'
    //     +           '<input class="toggle" type="checkbox" {{checked}}>'
    //     +           '<label>{{title}}</label>'
    //     +           '<button class="destroy"></button>'
    //     +       '</div>'
    //     +   '</li>'
    // }

    /**
     * Creates an <li> HTML string and returns it for placement in your app.
     *
     * NOTE: In real life you should be using a templating engine such as Mustache
     * or Handlebars, however, this is a vanilla JS example.
     *
     * @param {object} data The object containing keys you want to find in the
     *                      template to replace.
     * @returns {string} HTML String of an <li> element
     *
     * @example
     * view.show({
     *  id: 1,
     *  title: "Hello World",
     *  completed: 0,
     * })
     */
    // Template.prototype.show = function (data) {
    //     var i, l
    //     var view = ''

    //     for (i = 0, l = data.length; i < l; i++) {
    //         var template = this.defaultTemplate
    //         var completed = ''
    //         var checked = ''

    //         if (data[i].completed) {
    //             completed = 'completed'
    //             checked = 'checked'
    //         }

    //         template = template.replace('{{id}}', data[i].id)
    //         template = template.replace('{{title}}', escape(data[i].title))
    //         template = template.replace('{{completed}}', completed)
    //         template = template.replace('{{checked}}', checked)

    //         view = view + template
    //     }

    //     return view
    // }

    /**
     * Displays a counter of how many to dos are left to complete
     *
     * @param {number} activeTodos The number of active todos.
     * @returns {string} String containing the count
     */
    // Template.prototype.itemCounter = function (activeTodos) {
    //     var plural = activeTodos === 1 ? '' : 's'

    //     return '<strong>' + activeTodos + '</strong> item' + plural + ' left'
    // }

    /**
     * Updates the text within the "Clear completed" button
     *
     * @param  {[type]} completedTodos The number of completed todos.
     * @returns {string} String containing the count
     */
    // Template.prototype.clearCompletedButton = function (completedTodos) {
    //     if (completedTodos > 0) {
    //         return 'Clear completed'
    //     } else {
    //         return ''
    //     }
    // }

    // Export to window
    window.app = window.app || {}
    window.app.Template = Template
})(window)