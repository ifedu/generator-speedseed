/// <reference path="../../../typings/index.d.ts" />

(($component) => {
    let mark = 'X'

    for (let i = 0, l = $component.length; i < l; i++) {
        $component[i].addEventListener('mousedown', function (e) {
            mark = (mark === 'X') ? 'O' : 'X'

            this
            .children[0]
            .children[0]
            .innerText = mark
        })
    }
})(document.getElementsByTagName('ss-box'))