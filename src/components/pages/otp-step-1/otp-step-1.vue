
<script src="./otp-step-1.js"></script>
<style scoped lang="scss" src="./otp-step-1.scss"></style>

<template>
  <div class="page">

    <header>
      <img src="/static/mobile-1.svg"/>
      <div class="title">Verify Mobile Number</div>
    </header>

    <form @submit.prevent="submit">

      <div class="form-group">
        <label>Country code</label>
        <span class="icon-flag"></span>
        <input type="tel" value="+91" readonly>
      </div>

      <div class="form-group">
        <label>Mobile number</label>
        <span class="icon-phone"></span>
        <input type="tel" autofocus>
      </div>

      <small>
        We will send you one time password on this number. Click on next button to proceed.
      </small>
      <button type="submit" class="circle">
        <span class="icon-arrow-right"></span>
      </button>
    </form>
  </div>
</template>
