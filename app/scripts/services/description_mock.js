'use strict';

var DescMock = function(descId, title, explain, baseId) {
  this.descId = descId;
  this.title = title;
  this.explain = explain;
  this.baseId = baseId;
};

/**
 * @ngdoc service
 * @name trashAppApp.descriptionMock
 * @description
 * # descriptionMock
 * Factory in the trashAppApp.
 */
angular.module('trashAppApp')
  .factory('descriptionMock', function () {

    var descList = [];

    var descId = 1;
    var title = '平山とは';
    var explain = 'トラッシュブリーフィングに所属しているシステムエンジニア';
    var baseId = 1;
    var desc = new DescMock(descId, title, explain, baseId);
    descList.push(desc);

    var mock = {
      findById: function(id) {
        descList.forEach(function(d) {
          if (id === d.descId) {
            return d;
          }
        });
      },

      findByBaseId: function(id) {
        var resultList = [];
        descList.forEach(function(d) {
          if (id === d.baseId) {
            resultList.push(d);
          }
        });
        return resultList;
      }
    };

    return mock;
  });
