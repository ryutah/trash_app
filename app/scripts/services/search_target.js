'use strict';

/**
 * @ngdoc service
 * @name trashAppApp.searchTarget
 * @description
 * # searchTarget
 * Factory in the trashAppApp.
 */
angular.module('trashAppApp')
  .factory('searchTarget', function () {

    var SearchTarget = function(id, name) {
      this.searchId = id;
      this.searchName = name;
    };

    var targetList = [];
    var target = new SearchTarget(TrashConf.SearchTarget.NAME, '名前');
    targetList.push(target);

    target = new SearchTarget(TrashConf.SearchTarget.TAG, 'タグ');
    targetList.push(target);

    target = new SearchTarget(TrashConf.SearchTarget.OTHERNAME, '別名');
    targetList.push(target);

    return targetList;
  });
