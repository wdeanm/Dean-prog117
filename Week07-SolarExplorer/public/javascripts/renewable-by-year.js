var elfApp = angular.module('elfApp');

elfApp.controller('RenewableByYearController', function($scope, $http, renewableUtils) {
    // CODE FOR mainData and index THAT HAS NOT CHANGED OMITTED HERE
    'use strict';
    $scope.getRenewable = function() {
        // console.log('getRenewable');
        $http.get('data/Renewable.json')
            .then(function(res) {
                renewableUtils.init(res.data);
                $scope.renewable = res.data;
                $scope.renewableUtils = renewableUtils;
                $scope.simpleFormat = renewableUtils.getSimpleFormat();
            });
    };
});

elfApp.directive('elfRenewable', function() {
    'use strict';
    return {
        controller: 'RenewableByYearController',
        templateUrl: 'renewable-by-year'
    };
});
