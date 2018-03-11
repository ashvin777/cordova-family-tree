import TreeNode from './tree-node/tree-node.vue';
import UserModel from '../../../model/user';
import Contacts from '../../../service/contacts';

export default {
  name: 'FamilyTree',

  data() {
    return {
      selectedUser: {},
      currentUser: {},
      children: {}
    }
  },

  components: {
    TreeNode
  },

  mounted() {
    this.selectedUser = UserModel.getCurrentUser();
    this.currentUser = UserModel.getCurrentUser();
  },

  computed: {
    spouse: {
      get() {
        console.log(UserModel.getMembers());
        return UserModel.getMemberByProperty('spouseId', this.selectedUser.id);
      }
    }
  },

  methods: {

    addSpouse(member) {
      Contacts
        .pickContact()
        .then(contact => {
          if (contact.phoneNumbers && contact.phoneNumbers.length > 0 && contact.phoneNumbers[0].number) {
            let phoneNumber = contact.phoneNumbers[0].number;
            UserModel.addMember({
              id: phoneNumber,
              name: contact.name.formatted,
              phoneNumber: phoneNumber,
              fatherId: null,
              motherId: null,
              spouseId: this.selectedUser.id
            });
          }
        });
    },

    addChild(member) {
      Contacts
        .pickContact()
        .then(contact => {
          this.children = this.children || [];
          this.children.push({
            name: contact.name.formatted,
            phoneNumber: contact.phoneNumbers && contact.phoneNumbers.length > 0 ? contact.phoneNumbers[0].number : ''
          });
        });
    }

  }

}
