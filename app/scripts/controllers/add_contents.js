'use strict';

/**
 * @ngdoc function
 * @name trashAppApp.controller:AddContentsCtrl
 * @description
 * # AddContentsCtrl
 * Controller of the trashAppApp
 */
angular.module('trashAppApp')
  .controller('AddContentsCtrl', function ($scope, registor, search) {

    this.addTag = function() {
      $scope.tagList.push();
    };

    this.save = function(params) {
      registor.contents(params);
    };
  });
