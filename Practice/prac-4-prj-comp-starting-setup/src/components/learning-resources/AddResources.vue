<template>
  <base-dialog
    @close="showError = false"
    v-if="showError"
    title="Invalid input"
  >
    <template #default>
      <p>at-least one input value is valid</p>
      <p>please check your input</p>
    </template>
    <template #action>
      <base-button @click="showError = false">Okay</base-button>
    </template>
  </base-dialog>
  <div>
    <base-card>
      <h2>Add resources</h2>
      <form @submit.prevent="addResource" ref="form">
        <div>
          <label for="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter Title"
            v-model="enteredTitle"
          />
        </div>
        <div>
          <label for="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Enter Description"
            rows="4"
            cols="2"
            v-model="enteredDescription"
          ></textarea>
        </div>
        <div>
          <label for="link">Link</label>
          <input
            name="link"
            id="link"
            type="url"
            placeholder="Enter Url"
            v-model="enteredLink"
          />
        </div>
        <div>
          <base-button type="submit">Add Resources</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>
<script>
export default {
  emits: ["addResource"],
  data() {
    return {
      enteredTitle: "",
      enteredDescription: "",
      enteredLink: "",
      showError: false,
    };
  },
  inject: ["addData"],
  methods: {
    addResource() {
      if (
        (this.enteredTitle.trim() === "",
        this.enteredDescription.trim() === "" || this.enteredLink.trim() === 1)
      ) {
        this.showError = true;
      }
      this.addData({
        title: this.enteredTitle,
        description: this.enteredDescription,
        link: this.enteredLink,
      });

      (this.enteredTitle = ""), (this.enteredDescription = "");
      this.enteredLink = "";
    },
  },
};
</script>
<style scoped>
textarea {
  all: unset;
}
div {
  margin: 0 auto;
  width: 600px;
}
h2 {
  text-align: center;
}
form {
  margin: 0;
  padding: 0;
  width: 100%;
}
form div {
  width: 100%;
  text-align: start;
  margin: 20px auto;
}
form input,
textarea {
  width: 100%;
  font-size: inherit;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 3px;
}
form input:focus,
textarea:focus {
  outline: none;
  border: 1px solid orange;
}
</style>
