'use strict';

/**
 * @ngdoc function
 * @name trashAppApp.controller:TagViewCtrl
 * @description
 * # TagViewCtrl
 * Controller of the trashAppApp
 */
angular.module('trashAppApp')
  .controller('TagViewCtrl', function (tagViewService) {
    this.sample = 'TagViewCtrl';
    this.pushTag = function(tagId) {
      this.contentList = tagViewService.getContent(tagId);
    };
    this.tagList = tagViewService.getTagList();
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    tagViewService.debug();

    tagViewService.getTagList().forEach((function(val) {
      console.log(val.tagName);
    }));

    var content = tagViewService.getContent(1);
    content.forEach((function(val) {
      console.log(JSON.stringify(val));
    }));
  });
