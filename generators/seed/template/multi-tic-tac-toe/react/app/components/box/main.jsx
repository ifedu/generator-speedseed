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
            return ({%= include(__dirname, '-render.html') %})
        }
    })

    for (let i = 0, l = document.getElementsByTagName('ss-box').length; i < l; i++) {
        React.render(
            ({%= include(__dirname, '-dom.html') %}),
            document.getElementsByTagName('ss-box')[i]
        )
    }
})()