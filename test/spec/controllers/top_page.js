'use strict';

describe('Controller: TopPageCtrl', function () {

  // load the controller's module
  beforeEach(module('trashAppApp'));

  var TopPageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopPageCtrl = $controller('TopPageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
