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

    /*  beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('marie.html');
    });
*/
    fit('test-basic.js expects true to be true', function() {
        expect(true).toBe(true);
    });

    fit('test-basic.js should find the index', function() {
        expect(scope.index).toBe(0);
    });

    fit('test-basic.js should have a getRenewable method ', function() {
        expect(scope.getRenewable).toBeDefined();
    });

    fit(' test-basic.js should be possible to access the fixture', function() {
        var spanElement = document.getElementById('renewable');
        expect(spanElement).toBeDefined();
    });

});