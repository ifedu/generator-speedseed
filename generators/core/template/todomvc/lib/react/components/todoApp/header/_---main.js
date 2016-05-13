module.exports = {
    header: {
        input: `
            autoFocus={true}
            onChange={this.handleChange}
            onKeyDown={this.handleNewTodoKeyDown}
            value={this.state.newTodo}
        `
    }
}