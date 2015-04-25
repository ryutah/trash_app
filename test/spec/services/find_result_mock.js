'use strict';

describe('Service: findResultMock', function () {

  // load the service's module
  beforeEach(module('trashAppApp'));

  // instantiate service
  var findResultMock;
  beforeEach(inject(function (_findResultMock_) {
    findResultMock = _findResultMock_;
  }));

  it('should do something', function () {
    expect(!!findResultMock).toBe(true);
  });

});
