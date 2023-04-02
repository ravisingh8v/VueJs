<template>
  <header>
    <TheHeader></TheHeader>
  </header>
  <main>
      <RouterView></RouterView>
  </main>
  <footer></footer>
</template>

<script>
import TheHeader from "./components/core/TheHeader.vue";
export default {
  components: { TheHeader },
}
</script>

<style>
@import url('./../node_modules/bootstrap/dist/css/bootstrap.min.css');
ul{
  list-style: none;
  padding: 0;
}
</style>

