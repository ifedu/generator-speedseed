var app = app || {};

(() => {
    app.ALL_TODOS = 'all'
    app.ACTIVE_TODOS = 'active'
    app.COMPLETED_TODOS = 'completed'

    const TodoFooter = app.TodoFooter
    const TodoItem = app.TodoItem

    const ENTER_KEY = 13

    const TodoApp = React.createClass({
        getInitialState() {
            return {
                nowShowing: app.ALL_TODOS,
                editing: null,
                newTodo: ''
            }
        },

        componentDidMount() {
            const setState = this.setState

            const router = Router({
                '/': setState.bind(this, {nowShowing: app.ALL_TODOS}),
                '/active': setState.bind(this, {nowShowing: app.ACTIVE_TODOS}),
                '/completed': setState.bind(this, {nowShowing: app.COMPLETED_TODOS})
            })

            router.init('/')
        },

        handleChange: function (event) {
            this.setState({newTodo: event.target.value})
        },

        handleNewTodoKeyDown: function (event) {
            if (event.keyCode !== ENTER_KEY) {
                return
            }

            event.preventDefault()

            const val = this.state.newTodo.trim()

            if (val) {
                this.props.model.addTodo(val)
                this.setState({newTodo: ''})
            }
        },

        toggleAll(event) {
            const checked = event.target.checked

            this.props.model.toggleAll(checked)
        },

        toggle(todoToToggle) {
            this.props.model.toggle(todoToToggle)
        },

        destroy(todo) {
            this.props.model.destroy(todo)
        },

        edit(todo) {
            this.setState({editing: todo.id})
        },

        save(todoToSave, text) {
            this.props.model.save(todoToSave, text)
            this.setState({editing: null})
        },

        cancel() {
            this.setState({editing: null})
        },

        clearCompleted() {
            this.props.model.clearCompleted()
        },

        render() {
            let footer
            let main
            let todos = this.props.model.todos

            let shownTodos = todos.filter((todo) => {
                let showing = {
                    [app.ACTIVE_TODOS]: () => !todo.completed,
                    default: () => true
                }

                showing[app.COMPLETED_TODOS] = () => todo.completed

                return (showing[this.state.nowShowing] || showing.default)()
            })

            let todoItems = shownTodos.map((todo) => (<%= include('app/components/todoApp', 'items') %>))

            let activeTodoCount = todos.reduce((accum, todo) => {
                return todo.completed ? accum : accum + 1
            }, 0)

            let completedCount = todos.length - activeTodoCount

            if (activeTodoCount || completedCount) {
                footer = <%= include('app/components/todoApp', 'footer') %>
            }

            if (todos.length) {
                main = (<%= include('app/components/todoApp', 'section') %>)
            }

            return (<%= include('app/components/todoApp', 'header') %>)
        }
    })

    let model = new app.TodoModel('react-todos')

    function render() {
        React.render(
            <%= include('app/components/todoApp', 'dom') %>,
            document.getElementsByClassName('todoapp')[0]
        )
    }

    model.subscribe(render)
    render()
})()