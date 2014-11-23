'use strict';

/**
 * @ngdoc overview
 * @name droughtioApp
 * @description
 * # droughtioApp
 *
 * Main module of the application.
 */
var app = angular
  .module('droughtioApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
