'use strict';

describe('Service: tagViewFactoy', function () {

  // load the service's module
  beforeEach(module('trashAppApp'));

  // instantiate service
  var tagViewFactoy;
  beforeEach(inject(function (_tagViewFactoy_) {
    tagViewFactoy = _tagViewFactoy_;
  }));

  it('should do something', function () {
    expect(!!tagViewFactoy).toBe(true);
  });

});
