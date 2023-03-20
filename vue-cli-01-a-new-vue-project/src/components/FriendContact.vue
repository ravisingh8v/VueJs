<template>
  <section>
    <h1>friend.name</h1>
    <button @click="seeDetails">
      {{ detailsVisible ? "hide" : "show" }} Details
    </button>
    <ul v-if="detailsVisible">
      <li>{{ friend.phone }}</li>
      <li>{{ friend.email }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      detailsVisible: false,
      friend: { name: "ravi", email: "ravi@gmail.com", phone: "123 456 7890" },
    };
  },
  methods: {
    seeDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
};
</script>
