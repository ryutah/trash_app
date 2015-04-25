'use strict';

/**
 * @ngdoc service
 * @name trashAppApp.tagMock
 * @description
 * # tagMock
 * Factory in the trashAppApp.
 */
angular.module('trashAppApp')
  .factory('tagMock', function () {

    var Tag = {};

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
