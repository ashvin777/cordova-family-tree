
<script src="./otp.js"></script>
<style scoped lang="scss" src="./otp.scss"></style>

<template>
  <div class="page">
    <header>
      <img src="/static/mobile-1.svg"/>
      <h2>Verify Mobile Number</h2>
      <small>Enter mobile number</small>
    </header>

    <form @submit.prevent="submit">
      <input type="number" placeholder="Mobile number..." autofocus>
      <button type="submit" class="full">Send OTP</button>
    </form>
  </div>
</template>
