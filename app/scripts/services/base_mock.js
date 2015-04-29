'use strict';

var BaseMock = function(baseId, baseName, descId) {
  this.baseId = baseId;
  this.baseName = baseName;
  this.descId = descId;
};

/**
 * @ngdoc service
 * @name trashAppApp.baseMock
 * @description
 * # baseMock
 * Factory in the trashAppApp.
 */
angular.module('trashAppApp')
  .factory('baseMock', function () {
    var baseList = [];

    var baseId = 1;
    var baseName = '平山';
    var descId = 1;
    var base = new BaseMock(baseId, baseName, descId);
    baseList.push(base);

    var mock = {
      findById: function(baseId) {
        baseList.forEach(function(b) {
          if (baseId === b.baseId) {
            return b;
          }
        });
      },

      findByName: function(name) {
        var resultList = [];
        baseList.forEach(function(b) {
          if (name === b.baseName) {
            resultList.push(b);
          }
        });
        return resultList;
      }
    };

    return mock;
  });
