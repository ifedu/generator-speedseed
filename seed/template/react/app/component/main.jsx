(() => {
    const Component = React.createClass({
        click() {
        },

        render() {
            return ({%= include('render.html') %})
        }
    })

    ReactDOM.render(
        ({%= include('dom.html') %}),
        document.getElementsByTagName('<%= component %>')[0]
    )
})()