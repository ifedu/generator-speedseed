import React from 'react'
import ReactDOM from 'react-dom'

class Component extends React.Component {
    constructor() {
        super()
    }

    render() {
        return ({%= include('render.html') %})
    }
}

ReactDOM.render(
    {%= include('dom.html') %},
    document.getElementsByTagName('<%= tpl.component %>')[0]
)