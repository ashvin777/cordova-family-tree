class Contacts {
  constructor() {

  }

  getList() {
    return new Promise((resolve, reject) => {
      navigator.contactsPhoneNumbers.list(resolve, reject);
    });
  }

  pickContact() {
    return new Promise((resolve, reject) => {

      navigator.contacts.pickContact(contact => {
        if (contact.phoneNumbers && contact.phoneNumbers.length > 0 && contact.phoneNumbers[0].value) {
          let phoneNumber = contact.phoneNumbers[0].value;
          resolve({
            id: phoneNumber,
            name: contact.name.formatted,
            phoneNumber: phoneNumber,
            fatherId: null,
            motherId: null,
            spouseId: null
          });
        }
      }, reject);

    });
  }
}

export default new Contacts();
