<script src="./member.js"></script>

<style scoped lang="scss">
@import "../../../../../../style/consts.scss";

.member{
  position: relative;
  padding: 1rem 0;
  padding-left: 3%;
  max-width: 50%;
  width: 47%;
  float: left;

  .member-inner{
    position: relative;
    vertical-align: middle;

    display: flex;
    align-items: center;
    background: $lightest-gray;
    border-radius: 28px;
    height: 40px;
    transition: all 300ms;

    &:before{
      content: '';
      position: absolute;
      height: 0px;
      width: 10px;
      left: -10px;

      border-bottom: 2px solid $light-blue;
    }

    .text{
      padding: 0 5px;
      padding-right: 10px;
      padding-top: 1px;
      font-weight: 500;
      font-size: $font-normal;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      line-height: $font-medium;

      .relation{
        font-size: $font-smallest;
        color: $gray;
      }
    }

    .image{
      box-shadow: unset;
      background: $white;
      height: 35px;
      width: 35px;
      min-width: 35px;
      margin-left: 3px;
    }

    &.self{
      background: $light-blue;
      color: $white;
    }

    &:active{
      box-shadow: 0 3px 11px $gray;
    }
  }

  &.add{
    width: 50px;
    color: $white;
    .image{
      background: $light-blue;
      line-height: 30px;
      text-align: center;
    }
  }
}
</style>

<template>
  <div class="member" :class="{ 'add' : option }" v-if="(member && member.id) || option">
    <div class="member-inner" :class="{ self: isSelf}" @click="$emit('click')" v-if="member && member.id">
      <div class="image"></div>
      <div class="text">
        {{member.name}}
        <div class="relation">Relation</div>
      </div>
    </div>

    <div class="member-inner" v-if="option" @click="$emit('click', option)">
      <div class="image">
        <span class="icon-plus"></span>
      </div>
    </div>
  </div>

</template>
