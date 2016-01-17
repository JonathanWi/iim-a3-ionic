// uses ngStorage module
//based on  https://gist.github.com/benmj/6380466
//http://stackoverflow.com/questions/14464945/add-queueing-to-angulars-http-service
'use strict';

angular.module('Places').factory('Geocoder', function ($localStorage, $q, $timeout) {

  var $storage = $localStorage.$default({
    locations : {}
  });

  var queue = [];

// Amount of time (in milliseconds) to pause between each trip to the
// Geocoding API, which places limits on frequency.
var queryPause = 250;

/**
* executeNext() - execute the next function in the queue.
* If a result is returned, fulfill the promise.
* If we get an error, reject the promise (with message).
* If we receive OVER_QUERY_LIMIT, increase interval and try again.
*/
var executeNext = function () {
  var task = queue[0],
  geocoder = new google.maps.Geocoder();

  geocoder.geocode({'latLng': task.latlng}, function (result, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      var address = result[0].formatted_address.split(',')
      var geoaddress = {
        street: address[0],
        city: address[1],
        country: address[2]
      };

      queue.shift();

      $storage.locations[task.latlng] = geoaddress;
      $storage.locations = geoaddress;

      task.d.resolve(geoaddress);

      if (queue.length) {
        $timeout(executeNext, queryPause);
      }
    } else if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
      queue.shift();
      task.d.reject({
        type: 'zero',
        message: 'Zero results for geocoding latlng ' + task.latlng
      });
    } else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
      queryPause += 250;
      $timeout(executeNext, queryPause);
    } else if (status === google.maps.GeocoderStatus.REQUEST_DENIED) {
      queue.shift();
      task.d.reject({
        type: 'denied',
        message: 'Request denied for geocoding latlng ' + task.latlng
      });
    } else if (status === google.maps.GeocoderStatus.INVALID_REQUEST) {
      queue.shift();
      task.d.reject({
        type: 'invalid',
        message: 'Invalid request for geocoding latlng' + task.latlng
      });
    }
  });
};

return {
  addressForLatLng : function (lat, lng) {
    var d = $q.defer();
    var lat = parseFloat(lat);
    var lng = parseFloat(lng);
    var latlng = new google.maps.LatLng(lat, lng);
    if (latlng in $storage.locations) {
     $timeout(function () {
       d.resolve($storage.locations[latlng]);
     });
   } else {
    queue.push({
      latlng: latlng,
      d: d
    });
    if (queue.length === 1) {
      executeNext();
    }
  }
  return d.promise;
}
};
});