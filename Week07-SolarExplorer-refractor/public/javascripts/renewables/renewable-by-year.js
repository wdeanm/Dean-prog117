var elfApp = angular.module('elfApp');

elfApp.controller('RenewableByYearController', function($scope, $http, renewableUtils) {
    'use strict';
    $scope.getRenewableByYear = function() {
        $http.get('data/Renewable.json')
            .then(function(res) {
                renewableUtils.init(res.data);
                $scope.renewable = res.data;
                $scope.renewableUtils = renewableUtils;
                $scope.renewablesByYear = renewableUtils.getRenewableByYear();
            });
    };
});

elfApp.directive('elfRenewablebyyear', function() {
    'use strict';
    return {
        controller: 'RenewableByYearController',
        templateUrl: 'renewables/renewablebyyear'
    };
});
