'use strict';

describe('Service: baseTagMock', function () {

  // load the service's module
  beforeEach(module('trashAppApp'));

  // instantiate service
  var baseTagMock;
  beforeEach(inject(function (_baseTagMock_) {
    baseTagMock = _baseTagMock_;
  }));

  it('should do something', function () {
    expect(!!baseTagMock).toBe(true);
  });

});
