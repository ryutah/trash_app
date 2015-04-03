'use strict';

/**
 * @ngdoc function
 * @name trashAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trashAppApp
 */
angular.module('trashAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
