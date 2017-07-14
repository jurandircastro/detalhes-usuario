'use strict';

angular.module('Teste').config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/inicial');

  $stateProvider
  .state('inicial', {
    url: '/inicial',
    templateUrl: 'views/inicial.html',
    controller: 'TesteController'
  });

});
