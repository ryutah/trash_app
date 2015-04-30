'use strict';

/**
 * @ngdoc service
 * @name trashAppApp.search
 * @description
 * # search
 * Service in the trashAppApp.
 */
angular.module('trashAppApp')
  .service('search', function (tagMock, groupMock) {

    function search(params) {
      var searchObj = {};

      switch(param.target) {
        case TrashConf.SearchTarget.NAME:
          obj.baseName = params.name;
          break;
        case TrashConf.SearchTarget.TAG:
          obj.tagName = params.name;
          break;
        case TrashConf.SearchTarget.OTHERNAME:
          obj.otherName = params.name;
          break;
        default:
          console.error('検索対象じゃないよ');
          return null;
      }
    }

    function tagList(params) {
      var tagList;

      if (params === undefined) {
        tagList = tagMock.findAll();
      } else if (params.id !== undefined) {
        tagList = tagMock.findById(params.id);
      } else if (params.id !== undefined) {
        tagList = tagMock.findByName(params.name);
      } else {
        console.error('引数不正');
      }

      return tagList;
    }

    function groupList(params) {
      var groupList;

      if (params === undefined) {
        groupList = groupMock.findAll();
      } else if (params.id !== undefined) {
        groupList = groupMock.findById(params.id);
      } else if (params.name !== undefined) {
        groupList = groupMock.findByName(params.name);
      } else {
        console.error('引数不正');
      }

      return groupList;
    }
  });k
