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
            return {
                wood: renewable['Wood biomass (quedrillion Btu)']
            };
        });
    };

    this.getSimpleFormat = function() {
        return renewables.map(function(renewable) {
            return {
                solar: parseFloat(renewable['Solar (quadrillion Btu)']),
                geo: parseFloat(renewable['Geothermal (quadrillion Btu)']),
                wind: parseFloat(renewable['Wind power (quadrillion Btu)'])
            };
        });
    };

    this.getRenewableByYear = function() {
        return renewables.map(function(renewable) {
            return {
                first: parseFloat(renewable.year),
                solar: parseFloat(renewable['Solar (quadrillion Btu)']),
                geo: parseFloat(renewable['Geothermal (quadrillion Btu)']),
                other: parseFloat(renewable['Other biomass (quadrillion Btu)']),
                wind: parseFloat(renewable['Wind power (quadrillion Btu)']),
                liquid: parseFloat(renewable['Liquid biofuels (quadrillion Btu)']),
                wood: parseFloat(renewable['Wood biomass (quadrillion Btu)']),
                hydropower: parseFloat(renewable['Hydropower (quadrillion Btu)'])
            };
        });
    };
}

elfApp.service('renewableUtils', RenewableUtils);
