'use strict';

/**
 * @ngdoc service
 * @name trashAppApp.tagViewServiceMock
 * @description
 * # tagViewServiceMock
 * Service in the trashAppApp.
 */

angular.module('trashAppApp')
  .service('tagViewService', function () {
    var MockTag = function(tagId, tagName) {
      this.tagId = tagId;
      this.tagName = tagName;
    };

    var MockContent = function() {
      this.contentId = null;
      this.contentName = null;
      this.tagId = null;
    };

    function createCatgory1Content() {
      var contentList = [];

      for (var i = 1; i <= 10; ++i) {
        var content = new MockContent();
        content.contentId = i;
        content.contentName = 'でかい恐竜' + i;
        content.tagId = 1;

        contentList.push(content);
      }

      return contentList;
    }

    function createCatgory2Content() {
      var contentList = [];

      for (var i = 11; i <= 20 ; ++i) {
        var content = new MockContent();
        content.contentId = i;
        content.contentName = 'ちょっとでかい恐竜' + i;
        content.tagId = 2;

        contentList.push(content);
      }

      return contentList;
    }

    function createCatgory3Content() {
      var contentList = [];

      for (var i = 21; i <= 30; ++i) {
        var content = new MockContent();
        content.contentId = i;
        content.contentName = 'すごくでかい恐竜' + i;
        content.tagId = 3;

        contentList.push(content);
      }

      return contentList;
    }

    var tagList = [new MockTag(1, 'でかい'), new MockTag(2,'ちょっとでかい'), new MockTag(3, 'すごくでかい')];
    var contentList = [];
    contentList = contentList.concat(createCatgory1Content());
    contentList = contentList.concat(createCatgory2Content());
    contentList = contentList.concat(createCatgory3Content());

    var service = {
      getTagList : function(){
        return tagList;
      },

      getContent : function(tagId) {
        var resultList = [];

        contentList.forEach((function(val) {
          if (val.tagId == tagId) {
            resultList.push(val);
          }
        }));

        return resultList;
      },

      debug : function() {
        console.log('In Service');
      }
    };

    return service;
  });
