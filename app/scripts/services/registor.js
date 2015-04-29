'use strict';

/**
 * @ngdoc service
 * @name trashAppApp.registor
 * @description
 * # registor
 * Service in the trashAppApp.
 */
angular.module('trashAppApp')
  .service('registor', function () {
    function registNewContent(params) {
      console.log(params);
    }

    function registNewTag(tag) {
      console.log(tag);
    }

    function registNewGroup(group) {
      console.log(group);
    }

    return {
      contents: function(params) {
        registNewContent(params);
      },

      tag: function(tag) {
        registNewTag(tag);
      },

      group: function(group) {

        registNewGroup(group);
      }
    };
  });
