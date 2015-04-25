'use strict';

/**
 * @ngdoc service
 * @name trashAppApp.tagViewFactoy
 * @description
 * # tagViewFactoy
 * Factory in the trashAppApp.
 */
angular.module('trashAppApp')
  .factory('tagViewFactoy', function () {

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      tag_id: undefined,
      name: undefined
    };
  });
