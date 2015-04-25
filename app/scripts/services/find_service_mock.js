'use strict';

/**
 * @ngdoc service
 * @name trashAppApp.findServiceMock
 * @description
 * # findServiceMock
 * Service in the trashAppApp.
 */
angular.module('trashAppApp')
  .service('findService', function (findResultMock) {

    var bases = findResultMock.bases();
    var tags = findResultMock.tags();
    var bts = findResultMock.baseTags();
    var oNames = findResultMock.otherNames();
    var groups = findResultMock.groups();
    var bgs = findResultMock.baseGroups();
    var descs = findResultMock.descs();

    function findContent(searchParam) {

      function findTag(tag) {
        console.log('タグで検索');

        var result = [];
        tags.forEach(function(t) {
          if (tag === t.tagName) {
            bts.forEach(function(bt) {
              if (t.tagId === bt.tagId) {
                bases.forEach(function(base) {
                  if (bt.baseId === base.baseId) {
                    result.push(base);
                  }
                });
              }
            });
          }
        });
      }

      function findBase(base) {
        console.log('名前で検索');
      }

      if (searchParam.target === 'tag') {
        findTag(searchParam.desc);
      } else if (searchParam.target === 'base') {
        findBase(searchParam.desc);
      } else {
        console.log('存在しない検索方法');
      }
    }
  });
