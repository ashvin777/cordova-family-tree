export default {
  mounted() {
    try {
      let user = JSON.parse(localStorage.user);
      if (user.id) {
        this.$router.push('/home/family-tree');
      }
    } catch (err) {
      this.$router.push('/register');
    }

  }
}