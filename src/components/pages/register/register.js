import APIInstance from '../../../service/api';
import PATH from '../../../router/path';

export default {
  data() {
    return {
      form: {
        gender: 'male'
      }
    }
  },

  methods: {
    register(e) {

      if (e) e.preventDefault();

      APIInstance.post('user', this.form)
        .then(res => res.json())
        .then(res => {
          if (res instanceof Array && res.length > 0) {
            localStorage.user = JSON.stringify(res[0]);
            this.$router.push(PATH.FAMILY_TREE);
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
