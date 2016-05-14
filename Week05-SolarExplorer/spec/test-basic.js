describe('Elvenware Simple Plain Suite', function() {

    'use strict';

    var scope;
    var mainController;
    var $templateCache;
    var $compile;

    // Load the elfApp module from control.js with reference in layout.jade
    beforeEach(module('elfApp'));

    /*
     * instantiate the controller stand-alone, without the directive
     * We also get the Angular compiler and templateCache so we can process angular templates
     */
    beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_, _$controller_) {
        scope = _$rootScope_.$new();
        $compile = _$compile_;
        $templateCache = _$templateCache_;
        mainController = _$controller_('MainController', {
            $scope: scope
        });
    }));

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('marie.html');
    });

    it('should be possible to access the marie fixture', function() {
        var spanElement = document.getElementById('marie');
        expect(spanElement).toBeDefined();
        expect(spanElement.innerHTML).toContain('First');
    });

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    fit('should find the index', function() {
        expect(scope.index).toBe(0);
    });

    fit('should have a getRenewable method ', function() {
        expect(scope.getRenewable).toBeDefined();
    });

    fit('should be possible to access the fixture', function() {
        var spanElement = document.getElementById('renewable');
        expect(spanElement).toBeDefined();
    });
    
    fit('tests scope variable access in template loaded through fixture', function() {
    // Get element from fixture
    scope.renewable = [{
        "Year": "2017",
        "Solar (quadrillion Btu)": "0.8045307",
        "Geothermal (quadrillion Btu)": "0.2349284",
        "Other biomass (quadrillion Btu)": "0.50916",
        "Wind power (quadrillion Btu)": "2.202328",
        "Liquid biofuels (quadrillion Btu)": "1.2329197",
        "Wood biomass (quadrillion Btu)": "1.9860924",
        "Hydropower (quadrillion Btu)": "2.5859957"
    }];

    var el = document.getElementById('renewable');

    // ETC. The rest of the code is nearly, but not exactly identical to the marie code.
});

    it('tests scope variable access in template loaded through raw text', function() {
        $templateCache.put('marie',
            '<div id="marie">' +
            '   <p><span class="caption">First</span>: {{marie.firstName}}</p>' +
            '   <p><span class="caption">Last</span>: {{marie.lastName}}</p>' +
            '   <p><span class="caption">City</span>: {{marie.city}}</p>' +
            '</div>');

        var element = $compile('<elf-marie></elf-marie>')(scope);
        scope.$digest();

        // Check that the compiled element contains the templated content
        expect(element.text()).toContain('Paris');
    });

    it('tests scope variable access in template loaded through fixture', function() {
        // Get element from fixture
        var el = document.getElementById('marie');
        $templateCache.put('marie', el);
        var element = $compile('<elf-marie></elf-marie>')(scope);
        scope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.text()).toContain('Paris');
    });
});
