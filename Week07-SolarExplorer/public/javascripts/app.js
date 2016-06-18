var myModule = angular.module('elfApp', ['ngRoute']);

myModule.config(function($routeProvider, $locationProvider) {
    'use strict';
    $routeProvider.when('/', {
        templateUrl: 'main',
        controller: 'MainController'
    }).when('/simple-format', {
        templateUrl: 'simple-format',
        controller: 'SimpleFormatController'
    }).when('/renewable-by-year', {
        templateUrl: 'renewablebyyear',
        controller: 'RenewableByYearController'
    }).when('/about', {
        templateUrl: 'about',
        controller: 'AboutController'
    }).otherwise({
        redirectTo: '/'
    });
});
