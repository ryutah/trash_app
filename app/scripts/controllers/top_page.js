'use strict';

/**
 * @ngdoc function
 * @name trashAppApp.controller:TopPageCtrl
 * @description
 * # TopPageCtrl
 * Controller of the trashAppApp
 */
angular.module('trashAppApp')
  .controller('TopPageCtrl', function (searchTarget) {
    this.targetList = searchTarget;
    this.target = null;

    this.checkDropList = function(target) {
      this.target = target;
    };

    this.search = function(word) {
      alert(this.target + ' ' + word);
    };
  });
