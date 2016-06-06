(($components) ->
    mark = 'X'

    for $component in $components
        $component.addEventListener 'mousedown', (e) ->
            mark = if (mark == 'X') then 'O' else 'X'

            this
            .children[0]
            .children[0]
            .innerText = mark

)(document.getElementsByTagName('ss-box'))