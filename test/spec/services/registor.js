'use strict';

describe('Service: registor', function () {

  // load the service's module
  beforeEach(module('trashAppApp'));

  // instantiate service
  var registor;
  beforeEach(inject(function (_registor_) {
    registor = _registor_;
  }));

  it('should do something', function () {
    expect(!!registor).toBe(true);
  });

});
