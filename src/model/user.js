class UserModel {
  constructor() {
    this.user = {};
    this.members = JSON.parse(localStorage.members || '[]');
  }

  setCurrentUser(model) {
    this.user = model;
  }

  getCurrentUser() {
    return this.user;
  }

  addMember(member) {
    this.members.push(member);
    localStorage.members = JSON.stringify(this.members);
  }

  getMembers() {
    return this.members;
  }

  getMemberByProperty(property, value) {
    return this.members.find(member => {
      return member[property] === value;
    });
  }

  getMembersByProperty(property, value) {
    return this.members.filter(member => {
      return member[property] === value;
    });
  }

  clear() {
    this.user = {};
  }
}

export default new UserModel();