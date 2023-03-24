<template>
  <the-header title="RemeberMe"></the-header>
  <div>
    <the-resources></the-resources>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheResources from "./components/learning-resources/TheResources.vue";

export default {
  components: { TheHeader, TheResources },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Poppins", sans-serif;
}
</style>
