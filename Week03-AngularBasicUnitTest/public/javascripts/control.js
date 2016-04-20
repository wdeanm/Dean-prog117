/**
 * Created by charlie on 5/6/2015. modified by Dean Markley
 */


/* global angular */

(function() {
    var app = angular.module('elvenApp', []);
    

    app.controller('ElvenController', function() {
        var elvenController = this;
       
        elvenController.hint = "My hint.";
        
        elvenController.square = function(mySquare){
            return mySquare * mySquare;
            
        }
        elvenController.add = function(p1, p2){
            return p1 + p2;
            
        }
        
    });

})();