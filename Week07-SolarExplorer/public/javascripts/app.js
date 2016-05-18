var myModule = angular.module("elfApp", [ 'ngRoute' ]);

myModule.config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        templateUrl : "main",
        controller : "MainController"
    })
    .when('/simple-format', {
    templateUrl: 'simple-format-page',
    controller: 'SimpleFormatController'
    })
    .when('/about', {
        templateUrl : "about",
        controller : "AboutController"
    }).otherwise({
        redirectTo : '/'
    });
});