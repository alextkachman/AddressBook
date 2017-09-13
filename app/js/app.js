'use strict';
var addressBook = angular.module('addressBook', ['ui.router', 'ngResource', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'smart-table']);

addressBook.config(['$urlRouterProvider', '$stateProvider', '$httpProvider',
    function ($urlRouterProvider, $stateProvider) {
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
    }]);