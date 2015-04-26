'use strict';

describe('Service: groupMock', function () {

  // load the service's module
  beforeEach(module('trashAppApp'));

  // instantiate service
  var groupMock;
  beforeEach(inject(function (_groupMock_) {
    groupMock = _groupMock_;
  }));

  it('should do something', function () {
    expect(!!groupMock).toBe(true);
  });

  describe('findAll', function() {
    it('should be return 3 size list', function() {
      expect(groupMock.findAll().size()).toEqual(3);
    });
  });
});
