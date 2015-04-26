'use strict';

/**
 * @ngdoc service
 * @name trashAppApp.getList
 * @description
 * # getList
 * Service in the trashAppApp.
 */
angular.module('trashAppApp')
  .service('getListMock', function (tagMock, groupMock) {
    function findGroupList(name) {
      var result = [];
      if (name != undefined) {
        result = groupMock.findByName(name);
      } else {
        result = groupMock.findAll();
      }
      return result;
    }

    function findTagList(name) {
      var result = [];
      if (name != undefined) {
        result = tagMock.findByName(name);
      } else {
        result = tagMock.findAll();
      }
      return result;
    }

    var service = {
      findGroup: function(name) {
        return findGroupList(name);
      },

      findTag: function(name) {
        return findTagList(name);
      }
    };

    return service;
  });
