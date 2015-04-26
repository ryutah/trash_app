'use strict';

describe('Service: getList', function () {

  // load the service's module
  beforeEach(module('trashAppApp'));

  // instantiate service
  var getListMock;
  beforeEach(inject(function (_getListMock_) {
    getList = _getListMock_;
  }));

  it('should do something', function () {
    expect(!!getListMock).toBe(true);
  });

});
