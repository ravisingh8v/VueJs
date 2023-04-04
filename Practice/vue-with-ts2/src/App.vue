<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
/* h1 {
  color: red;
} */
h1 {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
