describe('Component: <%= component %>', () => {
    beforeEach(module('<%= project %>'))

    let component
    let ctrl
    let scope

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new()

        component = angular.element('<<%= component %>></<%= component %>>')
        component = $compile(component)(scope)

        ctrl = component.controller('<%= component %>')

        scope.$apply()
    }))

    it('Text in Template', () => {
        assert.equal(component.find('div').text(), 'Hello Component <%= component %>')
    })

    it('Property Ctrl', () => {
        assert.equal(ctrl.hello, undefined)
    })
})