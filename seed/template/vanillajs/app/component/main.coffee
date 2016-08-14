(($components) ->
    for $component in $components
        $component.addEventListener 'mousedown', (e) ->
            this

)(document.getElementsByTagName('<%= component %>'))