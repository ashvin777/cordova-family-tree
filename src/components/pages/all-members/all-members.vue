<script src="./all-members.js"></script>

<style scoped lang='scss'>
@import '../../../style/consts.scss';

.list-view {
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>

<template>
  <div class="page">
    <SearchBar @onKeyup="onSearchTextChanges"></SearchBar>
    <div class='list-view'>
      <ListMember v-for='(member, index) in membersComputed' :key='index' :member='member'></ListMember>
    </div>
  </div>
</template>
