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
            return (<%= box.main %>)
        }
    })

    for (let i = 0, l = document.getElementsByTagName('ss-box').length; i < l; i++) {
        React.render(
            (<%= box.render %>),
            document.getElementsByTagName('ss-box')[i]
        )
    }
})()