let app = app || {};

(() => {
    app.TodoFooter = React.createClass({
        render() {
            const activeTodoWord = app.Utils.pluralize(this.props.count, 'item')
            let clearButton = null

            if (this.props.completedCount > 0) {
                clearButton = ({%= include(__dirname, '-clearButton.html') %})
            }

            const nowShowing = this.props.nowShowing

            return ({%= include(__dirname, '-dom.html') %})
        }
    })
})()
