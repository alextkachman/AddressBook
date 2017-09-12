angular.module('addressBook').controller('ContactsController', function ($scope, ContactsService, contacts) {
    $scope.isTableView = true;
    $scope.itemsByPage = 10;
    $scope.contacts = contacts;

    $scope.convert = function (array) {
        if (array instanceof Array) {
            return array.join();
        }
    }
});