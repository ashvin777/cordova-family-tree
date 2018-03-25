
<template>
  <form class="page" @submit.prevent="register">

    <header>
      <img src="../../../../static/logo.svg"/>
      <h3>Family <b>tree</b></h3>
    </header>

    <section>
      <input type="text" placeholder="Full name" v-model="form.name" required>
      <input type="email" placeholder="Email" v-model="form.email">

      <select v-model="form.gender" required>
        <option value="male">Male</option>
        <option value="femail">Female</option>
      </select>

      <input type="number" placeholder="Mobile" v-model="form.mobile" required>
    </section>

    <footer>
      <button class="full" type="submit">
        SIGN UP
        <span class="icon-arrow-right"></span>
      </button>
    </footer>

  </form>
</template>

<script src="./register.js">
</script>

<style scoped lang="scss">
@import "../../../style/consts.scss";

.page {
  background: $white;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
  position: relative;
  max-width: 560px;
  margin: auto;

  header {
    color: $light-blue-shade;
    height: calc(100% - 325px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      font-weight: normal;
    }

    img {
      width: 80px;
    }
  }

  section,
  footer {
    padding: 1rem;
    padding-top: 0;
  }
}
</style>
