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
        expect(component.find('div').text())
        .toBe('Hello Component <%= component %>')
    })

    it('Property Ctrl', () => {
        expect(ctrl.hello)
        .toBe(undefined)
    })
})