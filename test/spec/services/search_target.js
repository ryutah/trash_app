'use strict';

describe('Service: searchTarget', function () {

  // load the service's module
  beforeEach(module('trashAppApp'));

  // instantiate service
  var searchTarget;
  beforeEach(inject(function (_searchTarget_) {
    searchTarget = _searchTarget_;
  }));

  it('should do something', function () {
    expect(!!searchTarget).toBe(true);
  });

});
