<template>
  <header>
    <TheHeader></TheHeader>
  </header>
  <main>
    <router-view />
  </main>
</template>
<script lang="ts">
import TheHeader from "./components/navbar/TheHeader.vue";
export default {
  components: { TheHeader },
};
</script>

<style lang="scss">
// HERE MAIN STYLE COME
</style>
