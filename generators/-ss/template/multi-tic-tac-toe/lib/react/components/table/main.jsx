(() => {
    const Table = React.createClass({
        render() {
            return (<%= table.main %>)
        }
    })

    React.render(
        (<%= table.render %>),
        document.getElementsByTagName('ss-table')[0]
    )
})()