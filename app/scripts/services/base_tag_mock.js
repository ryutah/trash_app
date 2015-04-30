'use strict';

var BaseTagMock = function(baseId, tagId) {
  this.baseId = baseId;
  this.tagId = tagId;
};

/**
 * @ngdoc service
 * @name trashAppApp.baseTagMock
 * @description
 * # baseTagMock
 * Factory in the trashAppApp.
 */
angular.module('trashAppApp')
  .factory('baseTagMock', function () {
    var baseTagList = [];

    var baseTag = new BaseTagMock(1, 1);
    baseTagList.push(baseTag);

    return {
      findAll: function() {
        return baseTagList;
      },

      findByBaseId: function(id) {
        var result = [];
        baseTagList.forEach(function(b) {
          if (id === b.baseId) {
            result.push(b);
          }
        });
        return result;
      },

      findByTagId: function(id) {
        var result = [];
        baseTagList.forEach(function(b) {
          if (id === b.tagId) {
            result.push(b);
          }
        });
        return result;
      }
    };
  });
