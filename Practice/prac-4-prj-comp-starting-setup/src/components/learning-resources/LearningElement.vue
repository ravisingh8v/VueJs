<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button>Delete</button>
      </header>
    </div>
    <div>
      <p>
        {{ description }}
      </p>
    </div>
    <nav><a :href="link">learn More</a></nav>
  </li>
</template>
<script>
export default {
  props: ["id", "title", "description", "link"],
};
</script>
<style scoped>
header {
  display: flex;
}
</style>
