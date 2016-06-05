(($component) => {
    for (let i = 0, l = $component.length; i < l; i++) {
        $component[i].addEventListener('mousedown', function (e) {
            this
        })
    }
})(document.getElementsByTagName('<%= component %>'))