(() => {
    const Component = React.createClass({
        click() {
        },

        render() {
            return ({%= include(__dirname, '-render.html') %})
        }
    })

    React.render(
        ({%= include(__dirname, '-dom.html') %}),
        document.getElementsByTagName('<%= component %>')[0]
    )
})()