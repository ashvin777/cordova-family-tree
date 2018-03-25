export default {
  mounted() {
    try {
      let user = JSON.parse(localStorage.user);
      if (user.id) {
        this.$router.push('family-tree');
      }
    } catch (err) {
      this.$router.push('/register');
    }

  }
}