'use strict';

/**
 * @ngdoc function
 * @name trashAppApp.controller:DinasourDescCtrl
 * @description
 * # DinasourDescCtrl
 * Controller of the trashAppApp
 */
angular.module('trashAppApp')
  .controller('DinasourDescCtrl', function ($routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // urlの可変部から取得
    console.log($routeParams.descId);
    // urlパラメータも取得可能
    // console.log($routeParams.name);

    function editContent() {

    }

    function deleteContent() {

    }

    var imageFile = "sampleImage" + $routeParams.descId;

    this.edit = editContent;
    this.delete = deleteContent;
    this.image = imageFile;
  });
