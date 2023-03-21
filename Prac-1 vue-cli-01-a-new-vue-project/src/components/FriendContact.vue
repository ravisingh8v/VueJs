<template>
  <li>
    <header>
      <h2>{{ name }}</h2>
    </header>
    <p v-if="isFavorite">Favorite</p>
    <button @click="seeDetails">
      {{ detailsVisible ? "hide" : "show" }} Details
    </button>
    <button @click="toggleFavorite">toggle favorite</button>
    <ul v-if="detailsVisible">
      <li>{{ phoneNumber }}</li>
      <li>{{ email }}</li>
    </ul>
    <button @click="$emit('deleteFriend', name)">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    email: String,
    phoneNumber: String,
    isFavorite: Boolean,
  },
  data() {
    return {
      detailsVisible: false,
      // friend: { name: "ravi", email: "ravi@gmail.com", phone: "123 456 7890" },
    };
  },
  methods: {
    seeDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavorite() {
      this.$emit("addFavorite", this.name);
    },
    // deleteFriend() {
    //   this.$emit("deleteFriend", this.name);
    // },
  },
};
</script>
<style></style>
