/**
 * Services that persists and retrieves todos from localStorage or a backend API
 * if available.
 *
 * They both follow the same API, returning promises for all changes to the
 * model.
 */
angular
.module('todomvc')
.factory('todoStorage', function ($http, $injector) {
    // Detect if an API backend is present. If so, return the API module, else
    // hand off the localStorage adapter

    // .get('/api')
    return $http
    .get('/ap')
    .then(function () {
        return $injector.get('api')
    }, function () {
        return $injector.get('localStorage')
    })
})
.factory('api', function ($resource) {
    const store = {
        todos: [],

        api: $resource('/api/todos/:id', null, {
            update: { method:'PUT' }
        }),

        clearCompleted() {
            const originalTodos = store.todos.slice(0)

            const incompleteTodos = store.todos.filter((todo) => !todo.completed)

            angular.copy(incompleteTodos, store.todos)

            return store.api.delete(() => {
            }, function error() {
                angular.copy(originalTodos, store.todos)
            })
        },

        delete(todo) {
            const originalTodos = store.todos.slice(0)

            store.todos.splice(store.todos.indexOf(todo), 1)

            return store.api.delete({ id: todo.id },
                function () {
                },
                function error() {
                    angular.copy(originalTodos, store.todos)
                }
            )
        },

        get: () => store.api.query((resp) => angular.copy(resp, store.todos)),

        insert(todo) {
            const originalTodos = store.todos.slice(0)

            return store.api.save(todo,
                function success(resp) {
                    todo.id = resp.id
                    store.todos.push(todo)
                }, function error() {
                    angular.copy(originalTodos, store.todos)
                })
                .$promise
        },

        put: (todo) => store.api.update({ id: todo.id }, todo).$promise
    }

    return store
})
.factory('localStorage', function ($q) {
    const STORAGE_ID = 'todos-angularjs'

    const store = {
        todos: [],

        _getFromLocalStorage: () => JSON.parse(localStorage.getItem(STORAGE_ID) || '[]'),

        _saveToLocalStorage: (todos) => localStorage.setItem(STORAGE_ID, JSON.stringify(todos)),

        clearCompleted() {
            const deferred = $q.defer()

            const incompleteTodos = store.todos.filter((todo) => !todo.completed)

            angular.copy(incompleteTodos, store.todos)

            store._saveToLocalStorage(store.todos)
            deferred.resolve(store.todos)

            return deferred.promise
        },

        delete(todo) {
            const deferred = $q.defer()

            store.todos.splice(store.todos.indexOf(todo), 1)

            store._saveToLocalStorage(store.todos)
            deferred.resolve(store.todos)

            return deferred.promise
        },

        get() {
            const deferred = $q.defer()

            angular.copy(store._getFromLocalStorage(), store.todos)
            deferred.resolve(store.todos)

            return deferred.promise
        },

        insert(todo) {
            const deferred = $q.defer()

            store.todos.push(todo)

            store._saveToLocalStorage(store.todos)
            deferred.resolve(store.todos)

            return deferred.promise
        },

        put(todo, index) {
            const deferred = $q.defer()

            store.todos[index] = todo

            store._saveToLocalStorage(store.todos)
            deferred.resolve(store.todos)

            return deferred.promise
        }
    }

    return store
})