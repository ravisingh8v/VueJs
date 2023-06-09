<template>
  <user-list-presentation
    :user-list="users"
    @editUser="editUser"
  ></user-list-presentation>
</template>
<script setup lang="ts">
import userListPresentation from "../user-list-presentation/user-list-presentation.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import user from "@/components/users/userModel";
import { useRouter } from "vue-router";
const $store = useStore();
const $router = useRouter();
const users = computed(() => {
  return $store.getters.userList;
});

function editUser(user: user, index: any) {
  console.log(index);

  $store.dispatch("currentUser", { user: user, id: index });
  $router.push(`/use-form/${index + 1}`);
}

// watch(
//   users,
//   () => {
//     console.log(users.value);
//   },
//   { immediate: true }
// );
</script>
