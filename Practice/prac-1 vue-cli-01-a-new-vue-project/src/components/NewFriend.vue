<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name</label>
      <input
        type="text"
        name=""
        placeholder="name"
        id="name"
        v-model="enteredName"
      />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input
        type="text"
        name=""
        placeholder="phone"
        id="phone"
        v-model="enteredPhone"
      />
    </div>
    <div>
      <label for="email">Email</label>
      <input
        type="text"
        name=""
        placeholder="email"
        id="email"
        v-model="enteredEmail"
      />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-data"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitForm() {
      this.$emit(
        "add-data",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
