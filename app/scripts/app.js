'use strict';

/**
 * @ngdoc overview
 * @name Places
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('Places', ['ionic', 'ngCordova', 'ngResource', 'yaru22.angular-timeago', 'ngStorage', 'ngMap'])

  .run(function($ionicPlatform, $localStorage, $rootScope, $state) {

    $ionicPlatform.ready(function() {
      // save to use plugins here
    });

    // Ajouter condition de redirection si l'utilisateur n'a pas vu les slides d'introduction.

  })

  .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');

    // Application routing
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      })
      .state('app.places', {
        url: '/places',
        views: {
          'viewContent': {
            templateUrl: 'templates/views/places.html',
            controller: 'PlacesController'
          }
        }
      })
      .state('app.place', {
        url: '/places/:id',
        views: {
          'viewContent': {
            templateUrl: 'templates/views/place.html',
            controller: 'PlaceController'
          }
        }
      })
      .state('app.filters', {
        url: '/filters',
        views: {
          'viewContent': {
            templateUrl: 'templates/views/filters.html',
            controller: 'FilterController'
          }
        }
      });

      // redirects to default route for undefined routes
      $urlRouterProvider.otherwise('/app/places');
      
  });


