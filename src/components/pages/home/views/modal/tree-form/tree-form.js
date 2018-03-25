import APIInstance from '../../../../../../service/api';

export default {
  props: ['user'],

  data() {
    return {
      treeName: ''
    }
  },

  methods: {
    submit() {
      APIInstance
        .post('tree', {
          name: this.treeName,
          userId: this.user.id
        })
        .then(res => res.json())
        .then(res => {
          if (res instanceof Array && res.length > 0) {
            this.$emit('close');
          }
        })
    }
  }
}
