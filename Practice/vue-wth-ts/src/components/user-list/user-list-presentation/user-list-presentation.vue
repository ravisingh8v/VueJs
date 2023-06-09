<template>
  <!-- user List  -->
  <section class="list-wrapper">
    <div class="mx-auto w-75">
      <h3 class="border text-center mt-5 py-2 rounded bg-dark text-white">
        Users List
      </h3>
      <div class="p-3 card shadow mt-5">
        <ul class="users p-0">
          <li class="p-2 text-white bg-primary rounded row">
            <div class="text-center col-1">sr.</div>
            <div class="text-center col-2">Firstname</div>
            <div class="text-center col-2">Lastname</div>
            <div class="text-center col-3">Email</div>
            <div class="text-center col-2">Phone</div>
            <div class="text-center col-2">Action</div>
          </li>
          <li
            class="p-2 bg-light mt-2 rounded row"
            v-for="(user, index) in userList"
            :key="index"
          >
            <div class="text-center col-1">{{ index + 1 }}</div>
            <div class="text-center col-2">{{ user.firstname }}</div>
            <div class="text-center col-2">{{ user.lastname }}</div>
            <div class="text-center col-3">{{ user.email }}</div>
            <div class="text-center col-2">{{ user.phone }}</div>
            <div class="text-center col-2">
              <label
                class="material-symbols-outlined mx-1 bg-primary p-1 text-white rounded"
                @click="$emit('editUser', { user, index })"
              >
                edit
              </label>
              <label
                class="material-symbols-outlined bg-danger p-1 text-white rounded"
              >
                delete
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps(["userList"]);
console.log("userlist", props.userList);
</script>
<style lang="scss">
label {
  cursor: pointer;
}
</style>
