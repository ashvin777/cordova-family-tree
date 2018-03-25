import APIInstance from '../../../service/api';

export default {
  data() {
    return {
      form: {
        gender: 'male'
      }
    }
  },

  methods: {
    register() {

      APIInstance.post('user', this.form)
        .then(res => res.json())
        .then(res => {
          if (res instanceof Array && res.length > 0) {
            localStorage.user = JSON.stringify(res[0]);
            this.$router.push('home/family-tree');
          } else {
            alert(res.detail);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}
