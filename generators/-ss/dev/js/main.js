let mark = 'X'

$('.box').on('mousedown', function() {
    mark = (mark === 'X') ? 'O' : 'X'

    $(this).children().text(mark)
})