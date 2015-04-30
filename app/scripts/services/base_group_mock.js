'use strict';

var BaseGroupMock = function(baseId, groupId) {
  this.baseId = baseId;
  this.groupId = groupId;
};

/**
 * @ngdoc service
 * @name trashAppApp.baseGroupMock
 * @description
 * # baseGroupMock
 * Factory in the trashAppApp.
 */
angular.module('trashAppApp')
  .factory('baseGroupMock', function () {
    var baseGroupList = [];

    var baseGroup = new BaseGroupMock(1, 1);
    baseGroupList.push(baseGroup);

    baseGroup = new BaseGroupMock(1, 3);
    baseGroupList.push(baseGroup);

    return {
      findAll: function() {
        return baseGroupList;
      },

      findByBaseId: function(id) {
        var result = [];
        baseGroupList.forEach(function(b) {
          if (id === b.baseId) {
            result.push(b);
          }
        });
        return result;
      },

      findByGroupId: function(id) {
        var result = [];
        baseGroupList.forEach(function(b) {
          if (id === b.groupId) {
            result.push(b);
          }
        });
        return result;
      }
    };
  });
