describe('Elvenware Simple Mocks Suite', function() {
    'use strict';

    var $httpBackend, scope, mainController;

    // Set up the module
    beforeEach(module('elfApp'));

    beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_, _$controller_) {
        scope = _$rootScope_.$new();
        var $compile = _$compile_;
        $httpBackend = _$httpBackend_;
        mainController = _$controller_('MainController', {
            $scope: scope
        });
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('proves we can run tests', function() {
        expect(true).toBe(true);
    });

    it('proves we can detect mock data', function() {

        var renewable = [{
            "Year": "2017",
            "Solar (quadrillion Btu)": "0.8045307",
            "Geothermal (quadrillion Btu)": "0.2349284",
            "Other biomass (quadrillion Btu)": "0.50916",
            "Wind power (quadrillion Btu)": "2.202328",
            "Liquid biofuels (quadrillion Btu)": "1.2329197",
            "Wood biomass (quadrillion Btu)": "1.9860924",
            "Hydropower (quadrillion Btu)": "2.5859957"
        }];

        // Define what happens when $http.get() is called.
        var requestHandler = $httpBackend
            .when('GET', 'data/Renewable.json')
            .respond(renewable);

        $httpBackend.expectGET('data/Renewable.json');
        scope.getRenewable();
        $httpBackend.flush();
        expect(scope.renewable[0].Year).toEqual('2017');
    })
});
