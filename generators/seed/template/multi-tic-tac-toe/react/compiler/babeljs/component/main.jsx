(() => {
    const Component = React.createClass({
        click() {
        },

        render() {
            return ({%= include(__dirname, '-render.html') %})
        }
    })

    ReactDOM.render(
        ({%= include(__dirname, '-dom.html') %}),
        document.getElementsByTagName('<%= component %>')[0]
    )
})()