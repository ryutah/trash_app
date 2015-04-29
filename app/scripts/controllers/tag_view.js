'use strict';

/**
 * @ngdoc function
 * @name trashAppApp.controller:TagViewCtrl
 * @description
 * # TagViewCtrl
 * Controller of the trashAppApp
 */
angular.module('trashAppApp')
  .controller('TagViewCtrl', function ($scope) {
    var Sample = function(id, name) {
      this.id = id;
      this.name = name;
    };
    var num = 0;
    this.add = function() {
      $scope.sample.array.push(new Sample(num, 'Array' + num));
      num++;
    };
  });
