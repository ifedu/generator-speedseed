(($component) => {
    let mark = 'X'

    $component.on('mousedown', function() {
        mark = (mark === 'X') ? 'O' : 'X'

        $(this)
        .children()
        .text(mark)
    })
})($('ss-box'))