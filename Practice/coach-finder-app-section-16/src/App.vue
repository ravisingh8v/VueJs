<template>
  <TheHeader></TheHeader>
  <RouterView v-slot="slotProps">
    <Transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </Transition>
  </RouterView>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: { TheHeader },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  created() {
    this.$store.dispatch("tryLogin");
  },
  watch: {
    didAutoLogout(cur, old) {
      if (cur && cur !== old) {
        this.$router.replace("/coaches");
      }
    },
  },
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

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.route.enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
