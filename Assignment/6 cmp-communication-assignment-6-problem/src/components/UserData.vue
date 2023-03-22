<template>
  <div class="form_wrapper w-50">
    <form class="w-100" id="form" @submit.prevent="submitData">
      <div class="d-flex justify-center flex-direction mt-3">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="name" v-model="enteredName" />
      </div>
      <div class="d-flex justify-center flex-direction mt-3">
        <label for="age">Age</label>
        <input type="text" id="age" placeholder="age" v-model="enteredAge" />
      </div>
      <div class="d-flex justify-center">
        <button type="submit">Add User</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-data", this.enteredName, this.enteredAge);
      // (this.enteredName = ""), (this.enteredAge = "");
      document.getElementById("form").reset();
      console.log(this.enteredName, this.enteredAge);
    },
  },
};
</script>
<style>
.form_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
