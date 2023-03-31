<template>
  <base-list>
    <li v-for="user in users" :key="user.id" class="border card p-2 my-2">
      <!-- class="border card p-2 my-2" -->
      <span>{{ user.name.toUpperCase() }}</span>
      <span>{{ user.role }}</span>
    </li>
  </base-list>
</template>
<script>
export default {
  inject: ["users"],
};
</script>
