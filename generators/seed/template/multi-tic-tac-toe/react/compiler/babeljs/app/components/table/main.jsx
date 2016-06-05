(() => {
    const Table = React.createClass({
        render() {
            return ({%= include(__dirname, '-render.html') %})
        }
    })

    React.render(
        ({%= include(__dirname, '-dom.html') %}),
        document.getElementsByTagName('ss-table')[0]
    )
})()