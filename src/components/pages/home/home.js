import Navbar from './navbar/navbar.vue';

export default {
  components: {
    Navbar
  },

  data() {
    return {
      user: {}
    }
  },

  mounted() {
    this.user = JSON.parse(localStorage.user);
  }
}
