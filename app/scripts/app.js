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
    'ngTouch',
    'ui.router',
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .when('/#/about', '/about')
      .otherwise('/');
//       .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl',
//         controllerAs: 'main'
//       })
//       .when('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl',
//       })
//       .when('/tag_view', {
//         templateUrl: 'views/tag_view.html',
//         controller: 'TagViewCtrl',
//         controllerAs: 'tagView'
//       })
//       .when('/dinasour_desc/:descId', {
//         templateUrl: 'views/dinasour_desc.html',
//         controller: 'DinasourDescCtrl',
//         controllerAs: 'dinasour'
//       })
//       .when('/add_contents', {
//         templateUrl: 'views/add_contents.html',
//         controller: 'AddContentsCtrl',
//         controllerAs: 'add'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });

    $stateProvider
      .state('main', {
        url: '/',
        views: {
          mainContent: {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
          }
        }
      })
      .state('main.example', {
        url: '/example',
        templateUrl: 'views/example.html',
      })
      .state('about', {
        url: '/about',
        views: {
          mainContent: {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          }
        }
      })
      .state('dinasour', {
        url: '/dinasour/:descId',
        views: {
          mainContent: {
            templateUrl: 'views/dinasour_desc.html',
            controller: 'DinasourDescCtrl',
            controllerAs: 'dinasour'
          }
        }
      });
  });
