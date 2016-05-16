let app = app || {};

(() => {
    app.TodoFooter = React.createClass({
        render() {
            const activeTodoWord = app.Utils.pluralize(this.props.count, 'item')
            let clearButton = null

            if (this.props.completedCount > 0) {
                clearButton = (<%= include('app/components/footer', 'clearButton') %>)
            }

            const nowShowing = this.props.nowShowing

            return (<%= include('app/components/footer', 'dom') %>)
        }
    })
})()
