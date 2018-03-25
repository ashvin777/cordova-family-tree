<script src="./family-tree.js"></script>
<style lang="scss" src="./family-tree.scss"></style>

<template>
  <div class="page">

    <TreeFormModal
      v-if="isTreeFormModalVisible"
      :user="selectedUser"
      @close="onTreeCreated">
    </TreeFormModal>

    <MemberOptionsModal
      v-if="isMemberOptionModalVisible"
      @select="onSelectMemberOptions"
      @close="isMemberOptionModalVisible = false">
    </MemberOptionsModal>

    <MemberDetailsModal
      v-if="isMemberDetailModalVisible"
      :user="selectedUser"
      :action="selectedOption"
      @added="onMemberAdded"
      @close="isMemberDetailModalVisible = false">
    </MemberDetailsModal>

    <div class="empty-state" v-if="loading === false && treeEntries && treeEntries.length === 0">
      <img src="../../../../../../static/logo.svg"/>
      <p>There is no family tree associated with for your profile.</p>
      <button @click="isTreeFormModalVisible = true">Let's create one</button>
    </div>

    <div class="tree-list-item" v-if="loading === false && treeEntries.length > 0">

      <Member
        class="root"
        @click="isMemberOptionModalVisible = true"
        :member="selectedUser"
        :isSelf="selectedUser.id === user.id">
      </Member>

      <Member
        :member="selectedUser.spouse">
      </Member>

      <Member
        v-if="!selectedUser.spouse" option='spouse' @click="onSelectMemberOptions">
      </Member>

      <div class="children">
        <div class="tree-list-item" v-for="child in selectedUser.children" :key="child.id">
          <Member :member="child"></Member>
          <Member :member="child.spouse"></Member>
          <Member v-if="!child.spouse" option='spouse' @click="onSelectMemberOptions"></Member>
        </div>

        <div class="tree-list-item tree-list-item-add">
          <Member option='child' @click="onSelectMemberOptions" ></Member>
        </div>
      </div>

    </div>

  </div>
</template>