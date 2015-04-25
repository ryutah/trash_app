'use strict';

describe('Controller: TagViewCtrl', function () {

  // load the controller's module
  beforeEach(module('trashAppApp'));

  var TagViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TagViewCtrl = $controller('TagViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
