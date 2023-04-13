<template>
  <button v-if="!link" class="btn px-4 py-2 rounded-pill" :class="mode">
    <slot></slot>
  </button>
  <RouterLink :to="to" :class="mode" class="btn px-4 py-2 rounded-pill" v-else>
    <slot></slot>
  </RouterLink>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    padding: {
      type: String,
      required: false,
      default: null,
    },
    margin: {
      type: String,
      required: false,
      default: null,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
