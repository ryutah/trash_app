'use strict';

describe('Service: baseMock', function () {

  // load the service's module
  beforeEach(module('trashAppApp'));

  // instantiate service
  var baseMock;
  beforeEach(inject(function (_baseMock_) {
    baseMock = _baseMock_;
  }));

  it('should do something', function () {
    expect(!!baseMock).toBe(true);
  });

});
