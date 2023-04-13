<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>
<script>
export default {
  props: ["type", "title"],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>
<style>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 0.8rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #b18e25;
  color: white;
}

.backend {
  background-color: #d5a61b;
  color: white;
}

.career {
  background-color: #e2ac0a;
  color: white;
}
</style>
