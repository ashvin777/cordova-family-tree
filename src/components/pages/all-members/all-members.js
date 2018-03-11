import SearchBar from '../../common/search-bar/search-bar.vue';
import ListMember from '../../common/list-member/list-member.vue';
import Contacts from '../../../service/contacts';

export default {
  components: {
    ListMember,
    SearchBar
  },

  data() {
    return {
      members: [],
      search: ''
    };
  },

  computed: {
    membersComputed() {
      if (!this.search) {
        return this.members;
      }
      return this.members.filter(member => {
        return member.name.search(this.search) !== -1;
      });
    }
  },

  mounted() {

    Contacts
      .getList()
      .then(contacts => {
        contacts.forEach(contact => {
          this.members.push({
            name: contact.displayName,
            phoneNumber: contact.phoneNumbers && contact.phoneNumbers.length > 0 ? contact.phoneNumbers[0].number : ''
          });
        });
      });

  },

  methods: {
    onSearchTextChanges(searchText) {
      this.search = searchText;
    }
  }
}
