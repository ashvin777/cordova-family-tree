<script src="./tree-form.js"></script>

<template>
  <form class="modal" @submit.prevent="submit">
    <div class="modal-inner">

      <div class="modal-body">
        <input type="text"
          v-model="treeName"
          placeholder="Enter name of tree..."
          autofocus
          required/>
      </div>

      <div class="modal-footer">
        <button type="button" class="secondary" @click="$emit('close')">
          Cancel
        </button>

        <button type="submit" >
          <span class="icon-plus"></span>
          Add tree
        </button>
      </div>
    </div>
  </form>
</template>

