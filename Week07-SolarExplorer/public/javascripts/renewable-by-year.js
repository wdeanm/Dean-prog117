var elfApp = angular.module('elfApp');

elfApp.controller('RenewableByYearController', function($scope, $http, renewableUtils) {
    // CODE FOR mainData and index THAT HAS NOT CHANGED OMITTED HERE
    'use strict';

    $scope.getByYear = function(year) {
        var renewableData = $scope.renewableUtils.getByYear(year);
        $scope.index = renewableData.index;
        $scope.renewableByYear = renewableData.renewable;
        return $scope.renewableByYear;
    };
});

elfApp.directive('elfRenewable', function() {
    'use strict';
    return {
        controller: 'RenewableByYearController',
        templateUrl: 'renewablebyyear'
    };
});
