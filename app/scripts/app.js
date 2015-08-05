'use strict';

/**
 * @ngdoc overview
 * @name sellerinterfaceApp
 * @description
 * # sellerinterfaceApp
 *
 * Main module of the application.
 */
angular
  .module('sellerinterfaceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$httpProvider) {
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
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl',
        controllerAs: 'myroute'
      })
      .otherwise({
        redirectTo: '/'
      });

    /* CORS... */
    /* http://stackoverflow.com/questions/17289195/angularjs-post-data-to-external-rest-api */
    $httpProvider.defaults.useXDomain = true;
     delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });
