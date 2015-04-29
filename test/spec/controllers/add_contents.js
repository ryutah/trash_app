'use strict';

describe('Controller: AddContentsCtrl', function () {

  // load the controller's module
  beforeEach(module('trashAppApp'));

  var AddContentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddContentsCtrl = $controller('AddContentsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
