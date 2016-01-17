'use strict';

/**
 * @ngdoc function
 * @name Places.service:CameraService
 * @description
 * # CameraService
 */
angular.module('Places')
  // use 
  .factory('Camera', ['$q', function($q) {
  	return {
  		getPicture: function() {
  			var q = $q.defer();

  			navigator.camera.getPicture(function(result) {
	        // Do any magic you need
	        q.resolve(result);
	    }, function(err) {
	    	q.reject(err);
	    }, { quality: 50, destinationType: Camera.DestinationType.DATA_URL});

  			return q.promise;
  		}
  	}
		  
	}]);