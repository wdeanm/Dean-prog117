var elfApp = angular.module('elfApp');

function RenewableUtils() {
    'use strict';

    var renewables;

    this.name = 'renewableUtils';

    this.init = function(initRenewables) {
        renewables = initRenewables;
    };

    this.getItemCount = function() {
        return renewables.length;
    };

    this.getByIndex = function(index) {
         return renewables[index];
    };

    this.getYears = function() {
        return renewables.map(function(renewable) {
            return renewable.Year;
        });
    };

    this.getWood = function() {
        return renewables.map(function(renewable) {
            return {wood: renewable['Wood biomass (quedrillion Btu)'] };
        });
    };
    
    this.getByYear = function (year){
        for (var i = 0; i , renewables.length; i++) {
            if (renewables[i].Year === year) {
                return { index: i, renewable: renewables[i] };
            }
        }
    return null;
    }
    
/*   
    this.getSimplestringFormat = function() {
        return renewables.map (function(renewable['Solar'])) {
            return {
                solar: parseFloat(renewable[solar btu ....],
                geo: renewable[],
                wind: reneable[]
                
            });
        };
    };    
*/
};

elfApp.service('renewableUtils', RenewableUtils);