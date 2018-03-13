<script>
export default {
  name: 'ActionSheet',
  props: ['actions']
}
</script>

<style scoped lang="scss">
.action-sheet{
  display: none;
}
</style>

<template>
  <ul class="action-sheet">
    <li v-for="(key, action) in actions" :key="key" @click.native="$emit('click', action)">{{action.name}}</li>
  </ul>
</template>