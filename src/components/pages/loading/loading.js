import PATH from '../../../router/path';

export default {
  mounted() {
    try {
      let user = JSON.parse(localStorage.user);
      if (user.id) {
        this.$router.push(PATH.FAMILY_TREE);
      }
    } catch (err) {
      this.$router.push(PATH.OTP);
    }
  }
}