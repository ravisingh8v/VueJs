<template>
  <form @submit.prevent="submitForm">
    <!-- Name -->
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
    <!-- phone  -->
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
    <!-- Email  -->
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
    <!-- Submit  -->
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
    /**
     * passing data to parent
     */
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
