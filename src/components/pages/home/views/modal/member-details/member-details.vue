<script src="./member-details.js"></script>

<template>
  <form class="modal" @submit.prevent="submit">
    <div class="modal-inner">

      <div class="modal-body">
        <input type="text" placeholder="Full name" v-model="form.name" required>
        <input type="email" placeholder="Email" v-model="form.email">

        <select v-model="form.gender" required>
          <option value="male">Male</option>
          <option value="femail">Female</option>
        </select>

        <input type="number" placeholder="Mobile" v-model="form.mobile" required>
      </div>

      <div class="modal-footer">
        <button type="button" class="secondary" @click="$emit('close')">
          Cancel
        </button>

        <button type="submit">
          <span class="icon-plus"></span>
          Add {{action}}
        </button>
      </div>
    </div>
  </form>
</template>

