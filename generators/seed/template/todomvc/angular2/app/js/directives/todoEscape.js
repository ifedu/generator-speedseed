/**
 * Directive that executes an expression when the element it is applied to gets
 * an `escape` keydown event.
 */
angular
.module('todomvc')
.directive('todoEscape', function () {
    const ESCAPE_KEY = 27;

    return function (scope, elem, attrs) {
        elem.bind('keydown', (event) => {
            if (event.keyCode === ESCAPE_KEY) {
                scope.$apply(attrs.todoEscape)
            }
        })

        scope.$on('$destroy', () => elem.unbind('keydown'))
    }
})