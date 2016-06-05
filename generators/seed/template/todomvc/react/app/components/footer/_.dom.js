'use strict'

const className = (todo) => `{classNames({selected: nowShowing === app.${todo}})}`

module.exports = {
    footer: {
        todos: [{
            className: className('ALL_TODOS'),
            href: '#/',
            txt: 'All'
        }, {
            className: className('ACTIVE_TODOS'),
            href: '#/active',
            txt: 'Active'
        }, {
            className: className('COMPLETED_TODOS'),
            href: '#/completed',
            txt: 'Completed'
        }]
    }
}