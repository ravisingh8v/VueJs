<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <router-link class="nav-link" to="/the-router/teams-list">Teams</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/the-router/users-list">Users</router-link>
      <!-- <a class="nav-link">Users</a> -->
    </li>
  </ul>
</template>
<style scoped>
.nav-link {
  color: white;
}
a.router-link-exact-active{
  color: green;
}
.nav-link.router-link-active,
.nav-link:hover {
  color: rgb(72, 99, 250);
}
</style>
