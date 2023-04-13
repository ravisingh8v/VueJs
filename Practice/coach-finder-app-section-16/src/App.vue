<template>
  <TheHeader></TheHeader>
  <RouterView></RouterView>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: { TheHeader },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");
@import url("./../node_modules/bootstrap/dist/css/bootstrap.min.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
body {
  font-family: "Poppins", sans-serif;
}
a {
  all: unset;
  cursor: pointer;
}
ul {
  all: unset;
}
.container {
  padding: 30px;
}

/* utilities  */
.d-flex {
  display: flex;
}

.btn:active {
  transition: all 0.1s ease-in-out;
  transform: scale(0.9) !important;
}
</style>
