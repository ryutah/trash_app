'use strict';

/**
 * @ngdoc service
 * @name trashAppApp.testService
 * @description
 * # testService
 * Service in the trashAppApp.
 */
angular.module('trashAppApp')
  .service('testService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    //
    return {
      name: 'test'
    };
  });
