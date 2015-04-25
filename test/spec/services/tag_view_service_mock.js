'use strict';

describe('Service: tagViewServiceMock', function () {

  // load the service's module
  beforeEach(module('trashAppApp'));

  // instantiate service
  var tagViewServiceMock;
  beforeEach(inject(function (_tagViewServiceMock_) {
    tagViewServiceMock = _tagViewServiceMock_;
  }));

  it('should do something', function () {
    expect(!!tagViewServiceMock).toBe(true);
  });

});
