<template>
  <div class="bg-dark">
    <TheSecondHeader></TheSecondHeader>
  </div>
  <section>
    <RouterView></RouterView>
  </section>
</template>
<script>
import TheSecondHeader from "../core/SecondHeader.vue";

export default {
  components: { TheSecondHeader },
};
</script>
