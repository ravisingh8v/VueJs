<template>
  <span>{{ count }}</span>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  data() {
    return {
      $store: useStore(),
    };
  },
  computed: {
    count(): number {
      return this.$store.state.counter;
    },
  },
});
</script>
