angular.module('addressBook').service('ContactsService', function (ContactsFactory) {
    return {
        loadContacts: loadContacts
    };

    function loadContacts() {
        return ContactsFactory.loadContacts().$promise.then(function (result) {
            if (result) {
                return result.data.AddressBook.Contact;
            }
        });
    }
});