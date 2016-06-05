(() => {
    const Component = React.createClass({
        click() {
        },

        render() {
            return ({%= include('app/components/<%= component %>', 'render') %})
        }
    })

    React.render(
        ({%= include('app/components/<%= component %>', 'dom') %}),
        document.getElementsByTagName('<%= component %>')[0]
    )
})()