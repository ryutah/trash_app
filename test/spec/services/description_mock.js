'use strict';

describe('Service: descriptionMock', function () {

  // load the service's module
  beforeEach(module('trashAppApp'));

  // instantiate service
  var descriptionMock;
  beforeEach(inject(function (_descriptionMock_) {
    descriptionMock = _descriptionMock_;
  }));

  it('should do something', function () {
    expect(!!descriptionMock).toBe(true);
  });

});
