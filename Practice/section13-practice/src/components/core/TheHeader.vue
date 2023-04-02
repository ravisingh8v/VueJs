<template>
  <nav class="navbar-dark bg-dark d-flex align-items-center p-2">
  <a class="navbar-brand me-4" href="#">Navbar</a>
    <ul class="navbar-nav d-flex flex-row">
      <li class="nav-item mx-2">
        <RouterLink class="nav-link" to="/home">Home</RouterLink>
    </li>
    <li class="nav-item mx-2">
          <RouterLink class="nav-link" to="/employee">Employee</RouterLink>
        </li>
        <li class="nav-item mx-2">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
      </li>
    </ul>
</nav>
</template>
<style scoped>
.nav-link.router-link-active{
    color: rgba(0, 132, 255, 0.672);
}
</style>