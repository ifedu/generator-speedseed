(() => {
    // Feature detect and conditionally load the polyfills.
    const webComponentsSupported = (
        'registerElement' in document
        && 'import' in document.createElement('link')
        && 'content' in document.createElement('template')
    )

    if (!webComponentsSupported) {
        const script = document.createElement('script')

        script.async = true
        script.src = 'vendor/webcomponentsjs/webcomponents-lite.min.js'

        document.head.appendChild(script)
    }
})()