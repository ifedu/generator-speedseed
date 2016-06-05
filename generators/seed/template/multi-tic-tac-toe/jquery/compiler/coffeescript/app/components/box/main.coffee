(($component) ->
    mark = 'X'

    $component.on 'mousedown', ->
        mark = if (mark == 'X') then 'O' else 'X'

        $(this)
        .children()
        .children()
        .text(mark)

)($('ss-box'))