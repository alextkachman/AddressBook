angular.module('addressBook').factory('ContactsFactory', function ($resource, EnvironmentConstants) {
    return $resource(EnvironmentConstants.API_URL + '/contacts/', {}, {
        loadContacts: {
            url: EnvironmentConstants.API_URL + '/contacts',
            method: 'GET'
        }
    });
});