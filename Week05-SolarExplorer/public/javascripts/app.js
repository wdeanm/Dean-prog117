var myModule = angular.module("elfApp", [ 'ngRoute' ]);

myModule.config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        templateUrl : "main",
        controller : "MainController"
    }).when('/about', {
        templateUrl : "about",
        controller : "AboutController"
    }).otherwise({
        redirectTo : '/'
    });
});