'use strict';

/**
 * @ngdoc function
 * @name Places.service:GeoLocation
 * @description
 * # GeoLocation
 */
angular.module('Places')
  // use 
  .factory('GeoLocation', ['$q', function($q) {
  	return {
  		getCurrentPosition: function() {
  			var q = $q.defer();

  			navigator.geolocation .getCurrentPosition(function (position) {
        // Do any magic you need
	        q.resolve(position);
	    }, function(err) {
	    	q.reject(err);
	    }, {enableHighAccuracy: true});

  			return q.promise;
  		}
  	}
		  
	}]);