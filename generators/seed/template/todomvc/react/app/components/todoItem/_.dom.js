'use strict'

const className = (todo) => `className = {classNames({selected: nowShowing === app.${todo}})}`

module.exports = {
    destroy: `
        className = 'destroy'
        onClick = {this.props.onDestroy}
    `,
    inputEdit: `
        onBlur = {this.handleSubmit}
        onChange = {this.handleChange}
        onKeyDown = {this.handleKeyDown}
        value = {this.state.editText}
    `,
    inputToggle: `
        checked = {this.props.todo.completed}
        onChange = {this.props.onToggle}
    `,
    li: `
        className = {classNames({
            completed: this.props.todo.completed,
            editing: this.props.editing
        })}
    `,
    onDoubleClick: `
        onDoubleClick = {this.handleEdit}
    `
}