'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('testangApp'));

    var MainCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));


    it('should not have any todo item to the scope', function () {
        expect(scope.todos.items.length).toBe(0);
    });

    it('should have one todo item when I add it to the scope', function () {
        scope.todos.add("first task");
        expect(scope.todos.items.length).toBe(1);
    });

});
