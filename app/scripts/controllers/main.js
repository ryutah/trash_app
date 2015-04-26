'use strict';

/**
 * @ngdoc function
 * @name trashAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trashAppApp
 */
angular.module('trashAppApp')
  .controller('MainCtrl', function (getListMock) {
    var SearcyType = function(id, name) {
      this.id = id;
      this.name = name;
    };
    var typeName = new SearcyType(1, '名前');
    var typeTag = new SearcyType(2, 'タグ');

    this.searchType = typeName;

    this.groupDropDown = {
      groupId: 0,
      groupName: '分類で絞り込む'
    };
    this.groupList = getListMock.findGroup();

    this.clickGroup = function(id) {
      console.log(id);
      var result = null;
      this.groupList.forEach(function(g) {
        if (id === g.groupId) {
          result = g;
        }
      });
      this.groupDropDown = result;
    };

    this.clickDropdown = function(id) {
      if (id ===  1) {
        this.searchType = typeName;
      } else {
        this.searchType = typeTag;
      }
    };
  });
