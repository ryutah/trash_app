'use strict';

describe('Service: baseGroupMock', function () {

  // load the service's module
  beforeEach(module('trashAppApp'));

  // instantiate service
  var baseGroupMock;
  beforeEach(inject(function (_baseGroupMock_) {
    baseGroupMock = _baseGroupMock_;
  }));

  it('should do something', function () {
    expect(!!baseGroupMock).toBe(true);
  });

});
