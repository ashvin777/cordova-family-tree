import APIInstance from '../../../../../../service/api';

export default {

  props: ['user', 'action'],

  data() {
    return {
      form: {
        gender: 'male'
      }
    }
  },

  methods: {
    submit() {

      if (this.action === 'spouse') {
        this.form.spouseId = this.user.id;
      } else if (this.action === 'child' && this.user.gender === 'male') {
        this.form.fatherId = this.user.id;
      } else if (this.action === 'child' && this.user.gender === 'female') {
        this.form.motherId = this.user.id;
      }

      APIInstance
        .post('member', this.form)
        .then(res => res.json())
        .then(res => {
          if (res instanceof Array && res.length > 0) {
            this.$emit('added', res[0]);
          }
        });
    }
  }
}
