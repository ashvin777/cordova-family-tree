
<template>
  <div class="page">
    <Navbar :user="user"></Navbar>
    <router-view></router-view>
  </div>
</template>

<script src="./home.js"></script>

<style scoped lang="scss">
@import "../../../style/consts.scss";

.page {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
}
</style>
