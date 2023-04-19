<template>
  <section>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>
<script>
import { computed, inject } from "vue";
export default {
  props: ["firstName", "lastName"],
  setup(props, context) {
    const userName = computed(() => {
      return props.firstName + " " + props.lastName;
    });
    const age = inject("userAge");
    context.emit("check", 1);
    return {
      userName,
      age,
    };
  },
};
</script>
