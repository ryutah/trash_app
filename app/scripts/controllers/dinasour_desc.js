'use strict';

/**
 * @ngdoc function
 * @name trashAppApp.controller:DinasourDescCtrl
 * @description
 * # DinasourDescCtrl
 * Controller of the trashAppApp
 */
angular.module('trashAppApp')
  .controller('DinasourDescCtrl', function ($stateParams, $cookieStore) {
    console.log($cookieStore);

    var cookie = $cookieStore.get('example');
    if (cookie === undefined || cookie === null) {
      cookie = 1;
      console.log(cookie);
      $cookieStore.put('example', cookie);
    } else {
      cookie++;
      console.log(cookie);
      $cookieStore.put('example', cookie);
    }

    // urlの可変部から取得
    console.log($stateParams.descId);
    // urlパラメータも取得可能
    // console.log($routeParams.name);

    function editContent() {
    }

    function deleteContent() {

    }

    var imageFile = "sampleImage" + $stateParams.descId;

    this.edit = editContent;
    this.delete = deleteContent;
    this.image = imageFile;
  });
