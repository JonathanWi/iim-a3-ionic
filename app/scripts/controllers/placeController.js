'use strict';

/**
 * @ngdoc function
 * @name Places.controller:PlacesController
 * @description
 * # PlacesController
 */
 angular.module('Places')
 .controller('PlaceController', function($scope, $localStorage, $stateParams, NgMap, GeoLocation, Geocoder) {


 	$scope.$storage = $localStorage;

 	$scope.place = $scope.$storage.places[$stateParams.id];

 	$scope.currentLocation = '';

 	GeoLocation
 	.getCurrentPosition()
 	.then(function (position) {

 		var place = {};
 		place.lat = position.coords.latitude;
 		place.long = position.coords.longitude;

 		Geocoder
 		.addressForLatLng(place.lat, place.long)
 		.then(function(address){

            // Define address
            $scope.currentLocation = address.street + ', ' + address.city + ',' + address.country;
            
        });
 	});
 });
