(() => {
    const Table = React.createClass({
        render() {
            return ({%= include('app/components/table', 'render') %})
        }
    })

    React.render(
        ({%= include('app/components/table', 'dom') %}),
        document.getElementsByTagName('ss-table')[0]
    )
})()