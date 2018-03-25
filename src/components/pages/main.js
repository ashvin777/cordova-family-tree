import Navbar from '../common/navbar/navbar.vue';
import UserModel from '../../model/user';

export default {
  name: 'MainPage',

  components: {
    Navbar
  },

  data() {
    return {
      user: {}
    }
  },

  created() {

    // this.user = {
    //   id: 1,
    //   name: 'Ashvin suthar',
    //   phoneNumber: '+91 8805194648',
    //   spouseId: null,
    //   fatherId: null,
    //   motherId: null
    // };

    // UserModel.setCurrentUser(this.user);
    // UserModel.addMember(this.user);
  }
}
