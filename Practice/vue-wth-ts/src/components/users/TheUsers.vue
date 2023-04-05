<template>
  <section class="p-3 d-flex flex-column align-items-center">
    <h3>The Users Page</h3>
    <nav>
      <RouterLink class="btn btn-dark my-2 me-2" :to="{ name: 'users-form' }"
        >Add Users</RouterLink
      >
      <RouterLink class="btn btn-dark my-2 ms-2" :to="{ name: 'users-list' }"
        >Users List</RouterLink
      >
    </nav>
    <section class="w-100 overflow-hidden">
      <RouterView v-slot="slotProps">
        <Transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </Transition>
      </RouterView>
    </section>
  </section>
</template>
<script lang="ts">
export default {};
</script>
<style lang="scss">
.route-enter-from {
  opacity: 0;
  transform: translateX(-500px);
}
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.route-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.route-leave-to {
  opacity: 0;
  transform: translateX(500px);
}
.route-enter-active,
.route-leave-active {
  transition: all 0.2s ease;
}
</style>
