<script src="./member-options.js"></script>
<style scoped lang="scss">
.modal{
  .modal-inner{
    background: transparent;
    box-shadow: none;
  }
}
</style>
<template>
  <div class="modal">

    <div class="modal-inner">
      <button class="full" @click="$emit('select', 'spouse')">
        Add spouse
      </button>

      <button class="full" @click="$emit('select', 'child')">
        Add child
      </button>

      <button class="full destructive" @click="$emit('select', 'delete')">
        Delete
      </button>

      <button class="full secondary" @click="$emit('close')">
        Cancel
      </button>
    </div>
  </div>
</template>

