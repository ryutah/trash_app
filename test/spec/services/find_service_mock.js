'use strict';

describe('Service: findServiceMock', function () {

  // load the service's module
  beforeEach(module('trashAppApp'));

  // instantiate service
  var findServiceMock;
  beforeEach(inject(function (_findServiceMock_) {
    findServiceMock = _findServiceMock_;
  }));

  it('should do something', function () {
    expect(!!findServiceMock).toBe(true);
  });

});
