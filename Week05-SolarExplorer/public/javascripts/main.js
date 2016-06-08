var elfApp = angular.module("elfApp");

/*	
elfApp.controller('MainController', function($scope, $http) {
    'use strict';
    $scope.mainData = "Main Data";
    $scope.index = 0;
    
    $scope.getRenewable = function() {
        console.log('getRenewable');
        $http.get('data/Renewable.json')
            .then(function(res) {
                console.log(res.data[0]);
                $scope.renewable = res.data;
            });
    }
});
*/

elfApp.controller('MainController', function($scope, $http, renewableUtils) {

     // CODE FOR mainData and index THAT HAS NOT CHANGED OMITTED HERE

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

})
	
elfApp.directive('elfRenewable', function() {
    'use strict';
    return {
        controller: 'MainController',
        templateUrl: 'renewable'
//        controllerAs: 'mainController',
//        template: 'First: {{mainController.renewable[mainController.index].Year}} ' +
//        '<br>Solar: {{mainController.renewable[mainController.index]["Solar (quadrillion Btu)"]}}' +
//        '<br>Geothermal: {{mainController.renewable[mainController.index]["Geothermal (quadrillion Btu)"]}}' +
//        '<br>Other biomass: {{mainController.renewable[mainController.index]["Other biomass (quadrillion Btu)"]}}' +
//        '<br>Wind power: {{mainController.renewable[mainController.index]["Wind power (quadrillion Btu)"]}}' +
//        '<br>Liquid biofuels: {{mainController.renewable[mainController.index]["Liquid biofuels (quadrillion Btu)"]}}' +
//         '<br>Wood biomass: {{mainController.renewable[mainController.index]["Wood biomass (quadrillion Btu)"]}}' +
//        '<br>Hydropower: {{mainController.renewable[mainController.index]["Hydropower (quadrillion Btu)"]}}' 
    };
});

