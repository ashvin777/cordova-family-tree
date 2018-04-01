
<script src="./otp-step-2.js"></script>
<style scoped lang="scss" src="./otp-step-2.scss"></style>

<template>
  <div class="page">

    <header>
      <img src="/static/mobile-1.svg"/>
      <div class="title">Enter One Time Password</div>
    </header>

    <form @submit.prevent="submit">

      <div class="form-group">
        <label>OTP Number</label>
        <span class="icon-lock"></span>
        <input type="tel" autofocus>
      </div>

      <small>
        Enter the OTP number you have received on your mobile phone number +91 8805194648. Click on next button to proceed.
      </small>

      <button type="submit" class="circle">
        <span class="icon-arrow-right"></span>
      </button>
    </form>
  </div>
</template>
