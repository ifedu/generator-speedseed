(($component) ->
    $component.on('mousedown', () ->
        $(this)
    )
)($('<%= component %>'))