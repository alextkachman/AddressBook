angular.module('addressBook').controller('ContactsController', function ($scope, ContactsService, contacts) {
    $scope.isTableView = true;
    $scope.contacts = contacts;
    $scope.itemsPerPage = 10;
    $scope.currentPage = 1;
    $scope.maxSize = 7;

    $scope.convert = function (array) {
        if (array instanceof Array) {
            return array.join();
        }
    };
});