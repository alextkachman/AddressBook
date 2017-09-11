'use strict';
var addressBook = angular.module('addressBook', ['ui.router', 'ngResource', 'ui.bootstrap']);

addressBook.config(['$urlRouterProvider', '$stateProvider', '$httpProvider',
    function ($urlRouterProvider, $stateProvider, $httpProvider) {
        $stateProvider
            .state({ name: 'contacts', url: '/', templateUrl: './views/contacts.html', controller: 'ContactsController'});
        $urlRouterProvider.otherwise('/');
    }])
    .run(function ($rootScope, $state, $window) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {

        });
    });