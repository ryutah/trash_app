'use strict';

var GroupMock = function(groupId, groupName, explain) {
  this.groupId = groupId;
  this.groupName = groupName;
  this.explain = explain;
};

/**
 * @ngdoc service
 * @name trashAppApp.groupMock
 * @description
 * # groupMock
 * Factory in the trashAppApp.
 */
angular.module('trashAppApp')
  .factory('groupMock', function () {

    var groupList = [];

    var groupId = 1;
    var groupName = '男';
    var explain = '男性社員';
    var group = new GroupMock(groupId, groupName, explain);
    groupList.push(group);

    groupId = 2;
    groupName = '女';
    explain = '女性社員';
    group = new GroupMock(groupId, groupName, explain);
    groupList.push(group);

    groupId = 3;
    groupName = 'へんたい';
    explain = 'へんたい社員';
    group = new GroupMock(groupId, groupName, explain);
    groupList.push(group);

    var mock = {

      findAll: function() {
        return groupList;
      },

      findById: function(id) {
        groupList.forEach(function(g) {
          if (id === g.groupId) {
            return g;
          }
        });
      },

      findByName: function(name) {
        var resultList = [];
        groupList.forEach(function(g) {
          if (name === g.groupName) {
            resultList.push(g);
          }
        });
        return resultList;
      }
    };

    return mock;
  });
