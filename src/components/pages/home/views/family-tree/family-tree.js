import APIInstance from '../../../../../service/api';

import TreeFormModal from '../modal/tree-form/tree-form.vue';
import MemberOptionsModal from '../modal/member-options/member-options.vue';
import MemberDetailsModal from '../modal/member-details/member-details.vue';

import Member from './member/member.vue';

export default {

  components: {
    TreeFormModal,
    MemberOptionsModal,
    MemberDetailsModal,

    Member
  },

  data() {
    return {
      selectedUser: {},
      user: {},

      loading: true,
      treeEntries: [],
      selectedTreeEntry: {},
      selectedOption: '',

      //MODAL
      isTreeFormModalVisible: false,
      isMemberOptionModalVisible: false,
      isMemberDetailModalVisible: false
    }
  },

  async mounted() {
    this.selectedUser = JSON.parse(localStorage.user);
    this.user = JSON.parse(localStorage.user);

    this.getTreeEntries(this.user);
    this.getSpouse(this.selectedUser);
    this.getChildren(this.selectedUser);

    //isTreeFormModalVisible = false
  },

  methods: {

    getSpouse(user) {
      APIInstance.get('member', {
          spouseId: user.id
        })
        .then(res => res.json())
        .then(res => {
          this.$set(user, 'spouse', res[0]);
        });
    },

    getChildren(user) {
      let options = {};
      if (user.gender === 'male') {
        options = {
          fatherId: user.id
        }
      } else {
        options = {
          motherId: user.id
        }
      }

      APIInstance
        .get('member', options)
        .then(res => res.json())
        .then(res => {
          this.$set(user, 'children', res);
        });
    },

    async getTreeEntries(user) {
      //Fetch user tree entries details
      this.loading = false;

      let treeEntries = await this.fetchTreeData(user);
      if (treeEntries instanceof Array && treeEntries.length > 0) {
        this.treeEntries = treeEntries;
        this.selectedTreeEntry = treeEntries[0];
      }
    },

    onTreeCreated() {
      this.getTreeEntries(this.user);
    },

    onMemberAdded(member) {
      this.isMemberDetailModalVisible = false;

      if (this.selectedOption === 'spouse') {
        this.getSpouse(this.selectedUser);
      } else if (this.selectedOption === 'child') {
        this.getChildren(this.selectedUser);
      }
    },

    onSelectMemberOptions(option) {
      this.isMemberOptionModalVisible = false;
      this.selectedOption = option;

      if (option === 'spouse' || option === 'child') {
        this.isMemberDetailModalVisible = true;
      }
    },

    fetchTreeData(user) {
      return APIInstance
        .get('tree', {
          userId: user.id
        })
        .then(res => res.json());
    }
  }

}
