'use strict';

/**
 * @ngdoc function
 * @name Places.controller:FilterController
 * @description
 * # FilterController
 */
angular.module('Places')
  .controller('FilterController', function($scope, $localStorage, $state) {

  	// Default filters value
  	$scope.$storage = $localStorage.$default({
  		filters : {
  			sort: 'date',
  			orderBy : 'asc',
        type: undefined,
        active: false
  		}
  	});

  	$scope.filters = $scope.$storage.filters;

    $scope.confirmFilters = function() {
    	if($scope.filters.type) {
    		$scope.$storage.filters.type = $scope.filters.type;
    	}
    	$scope.$storage.filters.sort = $scope.filters.sort;
    	$scope.$storage.filters.orderBy = $scope.filters.orderBy;

    	// Compute sorting
    	$scope.$storage.filters.computedOrder = $scope.filters.orderBy === 'asc' ?  $scope.filters.sort : '-' + $scope.filters.sort;
    	$scope.$storage.filters.active = true;
    }

  });
