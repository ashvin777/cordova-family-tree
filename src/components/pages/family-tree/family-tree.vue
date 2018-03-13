<script src="./family-tree.js"></script>
<style scoped lang="scss">
.page {
  padding-top: 1.5rem;
  overflow: scroll;

  .tree-list-item {
    display: block;
    width: 100%;
    padding: 0 1rem;
    clear: both;
  }

  .children{
    padding-top: 2rem;
    padding-left: 2rem;
  }
}
</style>

<template>
  <div class="page">

    <div class="tree-list-item">

      <TreeNode
        :member="selectedUser"
        :isSelf="selectedUser.id === currentUser.id"
        @addSpouse="addSpouse"
        @addChild="addChild">
      </TreeNode>

      <TreeNode
        :member="selectedUser.spouse"
        @delete="deleteSpouse"
        @addSpouse="addSpouse"
        @addChild="addChild">
      </TreeNode>

    </div>

    <div class="children">
      <div class="tree-list-item" v-for="child in selectedUser.children" :key="child.id">
        <TreeNode :member="child"
          @delete="deleteChildMember"
          @addSpouse="addSpouse"
          @addChild="addChild">
        </TreeNode>
        <TreeNode :member="child.spouse"></TreeNode>
      </div>
    </div>

  </div>
</template>