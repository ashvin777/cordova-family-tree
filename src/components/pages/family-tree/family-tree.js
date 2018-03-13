import TreeNode from './tree-node/tree-node.vue';
import UserModel from '../../../model/user';
import Contacts from '../../../service/contacts';

export default {
  name: 'FamilyTree',

  data() {
    return {
      selectedUser: {},
      currentUser: {},
      spouse: {},
      children: []
    }
  },

  components: {
    TreeNode
  },

  mounted() {
    this.selectedUser = UserModel.getCurrentUser();
    this.currentUser = UserModel.getCurrentUser();

    this.spouse = UserModel.getMemberByProperty('spouseId', this.selectedUser.id);
    this.children = UserModel.getMembersByProperty('fatherId', this.selectedUser.id);
  },

  methods: {

    addSpouse(member) {
      Contacts.pickContact().then(contact => {
        contact.spouseId = this.selectedUser.id;
        this.spouse = contact;
        UserModel.addMember(contact);
      });
    },

    addChild(member) {
      Contacts.pickContact().then(contact => {
        contact.fatherId = this.selectedUser.id;
        contact.motherId = this.spouse.id;
        this.children = this.children || [];
        this.children.push(contact);
        UserModel.addMember(contact);
      });
    },

    deleteSpouse() {
      this.spouse = {};
    },

    deleteChildMember(member) {
      let index = this.children.indexOf(member);

      this.children.splice(index, 1);
      // UserModel.deleteMember(member.id);
    }

  }

}
