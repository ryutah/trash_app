'use strict';

/**
 * @ngdoc function
 * @name trashAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the trashAppApp
 */
angular.module('trashAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
