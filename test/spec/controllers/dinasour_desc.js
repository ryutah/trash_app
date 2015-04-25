'use strict';

describe('Controller: DinasourDescCtrl', function () {

  // load the controller's module
  beforeEach(module('trashAppApp'));

  var DinasourDescCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DinasourDescCtrl = $controller('DinasourDescCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
