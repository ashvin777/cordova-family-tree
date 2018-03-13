import TreeNode from './tree-node/tree-node.vue';
import UserModel from '../../../model/user';
import Contacts from '../../../service/contacts';
import ActionSheet from '../../common/action-sheet/action-sheet.vue';

export default {
  name: 'FamilyTree',

  data() {
    return {
      selectedUser: {},
      currentUser: {}
    }
  },

  components: {
    TreeNode
  },

  mounted() {
    this.currentUser = UserModel.getCurrentUser();

    this.selectedUser = UserModel.getCurrentUser();
    this.selectedUser.spouse = UserModel.getMemberByProperty('spouseId', this.selectedUser.id);
    this.selectedUser.children = UserModel.getMembersByProperty('fatherId', this.selectedUser.id);
  },

  methods: {

    addSpouse(member) {
      Contacts.pickContact().then(contact => {
        contact.spouseId = member.id;
        member.spouse = contact;
        UserModel.addMember(contact);
      });
    },

    addChild(member) {
      Contacts.pickContact().then(contact => {
        contact.fatherId = member.id;
        contact.motherId = member.spouse.id;
        member.children = member.children || [];
        member.children.push(contact);
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
