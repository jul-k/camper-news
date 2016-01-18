'use strict';

/**
 * @ngdoc overview
 * @name camperNewsApp
 * @description
 * # camperNewsApp
 *
 * Main module of the application.
 */
angular
    .module('camperNewsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
