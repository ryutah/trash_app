'use strict';

/**
 * @ngdoc overview
 * @name trashAppApp
 * @description
 * # trashAppApp
 *
 * Main module of the application.
 */
angular
  .module('trashAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/tag_view', {
        templateUrl: 'views/tag_view.html',
        controller: 'TagViewCtrl',
        controllerAs: 'tagView'
      })
      .when('/dinasour_desc/:descId', {
        templateUrl: 'views/dinasour_desc.html',
        controller: 'DinasourDescCtrl',
        controllerAs: 'dinasour'
      })
      .when('/add_contents', {
        templateUrl: 'views/add_contents.html',
        controller: 'AddContentsCtrl',
        controllerAs: 'add'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
