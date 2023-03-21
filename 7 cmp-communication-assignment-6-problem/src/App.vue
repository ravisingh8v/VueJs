<template>
  <div class="main_wrapper">
    <div class="d-flex justify-center">
      <user-data @add-data="addData"></user-data>
    </div>
    <div class="d-flex justify-center mt-5">
      <div class="mt-5 w-50">
        <h3>User list</h3>
        <ul class="mt-4 card">
          <active-user
            v-for="user in users"
            :key="user.name"
            :name="user.name"
            :age="user.age"
          ></active-user>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    addData(user) {
      if (user.name && user.age) {
        this.users.push(user);
      }
      console.log(this.users);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
}

#app {
  height: 100%;
}
.main_wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  border: 2px solid seagreen;
}
.d-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.flex-direction {
  flex-direction: column;
}
.mt-5 {
  margin-top: 20px;
}
.mt-4 {
  margin-top: 16px;
}
.mt-3 {
  margin-top: 12px;
}
.w-100 {
  width: 100%;
}
.w-75 {
  width: 75%;
}
.w-50 {
  width: 50%;
}
.text-center {
  text-align: center;
}
.form_wrapper input {
  all: unset;
  border: 1px solid black;
  padding: 5px;
  margin: 10px 0;
}
.form_wrapper label {
  color: royalblue;
  font-weight: 600;
}
.form_wrapper button {
  all: unset;
  padding: 5px;
  text-align: center;
  border: 1px solid royalblue;
  width: 100%;
  margin-top: 25px;
  color: royalblue;
  font-weight: 600;
  background-color: rgba(65, 105, 225, 0.178);
}
ul {
  list-style: none;
}
li::selection {
  background-color: blue;
  color: white;
}
h1,
h2,
h3,
h4,
h5 {
  color: rgb(25, 46, 107);
  background-color: rgba(24, 24, 26, 0.178);
}
.card {
  border: 1px solid red;
  padding: 5px;
}
.card li {
  padding: 5px;
  background-color: aliceblue;
  box-shadow: 2px 0px 5px 2px grey;
}
</style>
