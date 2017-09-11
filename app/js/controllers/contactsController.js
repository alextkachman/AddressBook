angular.module('addressBook').controller('ContactsController', function ($scope, $state, ContactsService) {
    ContactsService.loadContacts().then(function (data) {
        $scope.contacts = data;
    });


});