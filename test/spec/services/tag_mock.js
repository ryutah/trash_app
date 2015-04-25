'use strict';

describe('Service: tagMock', function () {

  // load the service's module
  beforeEach(module('trashAppApp'));

  // instantiate service
  var tagMock;
  beforeEach(inject(function (_tagMock_) {
    tagMock = _tagMock_;
  }));

  it('should do something', function () {
    expect(!!tagMock).toBe(true);
  });

});
