'use strict';
var addressBook = angular.module('addressBook', ['ui.router', 'ngResource', 'ui.bootstrap', 'smart-table']);

addressBook.config(['$urlRouterProvider', '$stateProvider', '$httpProvider',
    function ($urlRouterProvider, $stateProvider, $httpProvider) {
        $stateProvider
            .state({
                name: 'contacts', url: '/', templateUrl: './views/contacts.html', controller: 'ContactsController',
                resolve: {
                    contacts: function (ContactsService) {
                        return ContactsService.loadContacts();
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    }])
    .run(function ($rootScope, $state, $window) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {

        });
    });