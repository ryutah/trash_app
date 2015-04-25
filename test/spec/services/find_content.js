'use strict';

describe('Service: findContent', function () {

  // load the service's module
  beforeEach(module('trashAppApp'));

  // instantiate service
  var findContent;
  beforeEach(inject(function (_findContent_) {
    findContent = _findContent_;
  }));

  it('should do something', function () {
    expect(!!findContent).toBe(true);
  });

});
