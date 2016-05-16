module.exports = {
    todoItem: `
        editing = {this.state.editing === todo.id}
        key = {todo.id}
        onCancel = {this.cancel}
        onDestroy = {this.destroy.bind(this, todo)}
        onEdit = {this.edit.bind(this, todo)}
        onSave = {this.save.bind(this, todo)}
        onToggle = {this.toggle.bind(this, todo)}
        todo = {todo}
    `
}