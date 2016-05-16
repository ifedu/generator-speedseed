(() => {
    let mark = ''

    const Box = React.createClass({
        click() {
            mark = (mark === 'X') ? 'O' : 'X'

            this.setState({mark})
        },

        getInitialState() {
            return {mark}
        },

        render() {
            return (<%= include('app/components/box', 'render') %>)
        }
    })

    for (let i = 0, l = document.getElementsByTagName('ss-box').length; i < l; i++) {
        React.render(
            (<%= include('app/components/box', 'dom') %>),
            document.getElementsByTagName('ss-box')[i]
        )
    }
})()