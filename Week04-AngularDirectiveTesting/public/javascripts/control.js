var elfApp = angular.module('elfApp', []);

elfApp.controller('MainController', function($scope) {
    'use strict';
    $scope.marie = {
        firstName: 'Marie',
        lastName: 'Curie',
        city: 'Paris',
        country: 'France'
    };
});

elfApp.directive('bar', function() {
    'use strict';
    return {
        link: function() {
            console.log('bar');
        },
        template: '<p>bar</p>'
    };
});

elfApp.directive('elfMarie', function() {
      'use strict';
    return {
        controller: 'MainController',
        templateUrl: 'marie'
    };
});

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

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });
});


