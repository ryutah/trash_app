'use strict';

var TagMock = function(tagId, tagName, explain) {
  this.tagId = tagId;
  this.tagName = tagName;
  this.explain = explain;
};

/**
 * @ngdoc service
 * @name trashAppApp.tagMock
 * @description
 * # tagMock
 * Factory in the trashAppApp.
 */
angular.module('trashAppApp')
  .factory('tagMock', function () {

    var tagList = [];

    var tagId = 1;
    var tagName = 'HENTAI';
    var explain = 'HENTAIは消してはならない';
    var tag = new TagMock(tagId, tagName, explain);
    tagList.push(tag);

    var mock = {
      /**
       * @ngdoc
       * @name findById
       * @param tagId
       *  # 検索対象のタグID
       */
      findById: function(tagId) {
        tagList.forEach(function(t) {
          if (tagId === t.tagId) {
            return t;
          }
        });
      },

      findByName: function(tagName) {
        var resultList = [];
        tagList.forEach(function(t) {
          if (tagName === t.tagName) {
            resultList.push(t);
          }
        });
        return resultList;
      }
    };

    // Public API here
    return mock;
  });
