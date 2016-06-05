/*global NodeList */
((window) => {
    'use strict'

    // Get element(s) by CSS selector:
    window.qs = (selector, scope) => (scope || document).querySelector(selector)
    window.qsa = (selector, scope) => (scope || document).querySelectorAll(selector)

    // addEventListener wrapper:
    window.$on = (target, type, callback, useCapture) => target.addEventListener(type, callback, !!useCapture)

    // Attach a handler to event for all elements that match the selector,
    // now or in the future, based on a root element
    window.$delegate = (target, selector, type, handler) => {
        const dispatchEvent = (event) => {
            var targetElement = event.target
            var potentialElements = window.qsa(selector, target)
            var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0

            if (hasMatch) {
                handler.call(targetElement, event)
            }
        }

        // https://developer.mozilla.org/en-US/docs/Web/Events/blur
        const useCapture = type === 'blur' || type === 'focus'

        window.$on(target, type, dispatchEvent, useCapture)
    }

    // Find the element's parent with the given tag name:
    // $parent(qs('a'), 'div')
    window.$parent = (element, tagName) => {
        if (!element.parentNode) return
        if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) return element.parentNode

        return window.$parent(element.parentNode, tagName)
    }

    // Allow for looping on nodes by chaining:
    // qsa('.foo').forEach(function () {})
    NodeList.prototype.forEach = Array.prototype.forEach
})(window)