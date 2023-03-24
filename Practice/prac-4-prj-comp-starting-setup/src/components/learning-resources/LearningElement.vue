<template>
  <li>
    <base-card>
      <div>
        <header>
          <h3>{{ title }}</h3>
          <base-button mode="flat" @click="deleteThis(id)">Delete</base-button>
        </header>
      </div>
      <div>
        <p>
          {{ description }}
        </p>
      </div>
      <nav><a :href="link">learn More</a></nav>
    </base-card>
  </li>
</template>
<script>
export default {
  emits: ["deleteItem"],
  props: ["id", "title", "description", "link"],
  inject: ["deleteItem"],
  methods: {
    deleteThis(id) {
      this.deleteItem(id);
    },
  },
};
</script>
<style scoped>
a,
button {
  all: unset;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
h3 {
  margin: 0;
  color: orange;
  text-transform: uppercase;
}
p {
  margin-bottom: 7px;
}
a {
  color: orange;
  transition: color 0.2s linear;
}
a:hover {
  color: rgb(255, 209, 101);
}

button,
a {
  cursor: pointer;
}
</style>
