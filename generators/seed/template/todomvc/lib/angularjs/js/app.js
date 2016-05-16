angular
.module('todomvc', ['ngRoute', 'ngResource'])
.config(function ($routeProvider) {
    const routeConfig = {
        controller: 'TodoCtrl',
        template: `<%= include('app/js', 'tpl') %>`,

        resolve: {
            store(todoStorage) {
                // Get the correct module (API or localStorage).
                return todoStorage.then((module) => {
                    module.get() // Fetch the todo records in the background.

                    return module
                })
            }
        }
    }

    $routeProvider
    .when('/', routeConfig)
    .when('/:status', routeConfig)
    .otherwise({
        redirectTo: '/'
    })
})