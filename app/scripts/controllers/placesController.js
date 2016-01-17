'use strict';

/**
 * @ngdoc function
 * @name Places.controller:PlacesController
 * @description
 * # PlacesController
 */
 angular.module('Places')
 .controller('PlacesController', function($scope, Camera, GeoLocation, $localStorage, Geocoder, $cordovaSocialSharing) {

  // Storage par défault
  $scope.$storage = $localStorage.$default({
    places : [
      {id: 0, name: 'Big Fernand', img: 'http://i.imgur.com/ULij4V6.jpg', lat: 48.874768, long: 2.347790, street: ' 55 Rue du Faubourg Poissonnière', city: '75009 Paris', country: 'France', date: 1453020383545},
      {id: 1, name: 'Point Ephemere', img: 'http://i.imgur.com/jrDfUPU.jpg', lat: 48.881720, long: 2.368582, street: '200 Quai de Valmy', city: '75010 Paris', country: 'France', date: 1453020833501},
      {id: 2, name: 'Zig Zag', img: 'http://i.imgur.com/Fc3p4xE.jpg', lat: 48.869401, long: 2.305231, street: '32 Rue Marbeuf', city: '75008 Paris', country: 'France', date: 1453021029822}
    ]
  });

  // Supprime les places en LocalStorage
  $scope.clearPlaces = function() {
    delete $scope.$storage.places;
  };

  // Supprime les places en LocalStorage
  $scope.clearFilters = function() {
    delete $scope.$storage.filters;
  };

  // Fonction de partage
  $scope.share = function(index) {
    var place = $scope.$storage.places[index];

    $cordovaSocialSharing
    .share('Just discovered a new awesome place!', place.street, place.img)
    .then(function(result) {});
  }

  // Ajouter une place
  $scope.addPlace = function() {
    var place = {};

  		// Take picture
  		Camera
  		.getPicture()
  		.then(function(imageURI) {

        place.img = "data:image/jpeg;base64," + imageURI;

  			// Get long / lat
  			GeoLocation
  			.getCurrentPosition()
  			.then(function (position) {

  				place.lat = position.coords.latitude;
  				place.long = position.coords.longitude;

  				// Convert long/lat to address
  				Geocoder
          .addressForLatLng(place.lat, place.long)
          .then(function(address){

            // Define address
            place.street = address.street;
            place.city = address.city;
            place.country = address.country;

            place.id = $scope.$storage.places.length;
            place.date = Date.now();

            // Save new address
            $scope.$storage.places.push(place);
            
          });
        });
  		});
  	};

  });
