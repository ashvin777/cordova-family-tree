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
      navigator.contacts.pickContact(resolve, reject);
    });
  }
}

export default new Contacts();
