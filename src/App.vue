<template>
  <div id="app" v-cloak>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
@import "./style/normalize.css";
@import "./style/font-icons.scss";
@import "./style/icons.scss";
@import "./style/animate.scss";
@import "./style/common.scss";
@import "./style/form.scss";

@import "./style/modal.scss";


[v-cloak] {
  display: none;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Quicksand", sans-serif;
  font-size: $font-medium;
}

#app {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
