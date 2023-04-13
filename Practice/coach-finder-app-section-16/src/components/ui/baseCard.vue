<template>
  <div class="card shadow rounded-3" :class="pad">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["pad"],
  data() {
    return {
      //   bgRed: "bg-danger",
    };
  },
};
</script>
