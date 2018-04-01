import PATH from '../../../router/path';

export default {
  methods: {
    submit() {
      this.$router.push(PATH.OTP_STEP_2);
    }
  }
}