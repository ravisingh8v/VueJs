<template>
  <!-- <section> -->
  <!-- <h2>{{ userName }}</h2>
    <h3>{{ user.age }}</h3> -->
  <!-- <p>{{ firstName.firstName || "not found" }}</p> -->
  <!-- <input type="text" name="firstname" v-model="firstName" id="" /> -->
  <!-- @input="setFirstName" -->
  <!-- <input type="text" name="firstname" id="" v-model="lastName" /> -->
  <!-- @input="setLastName" -->
  <!-- <button @click="setAge">Change Age</button> -->
  <!-- </section> -->
  <section>
    <RouterView></RouterView>
  </section>
</template>

<script>
import { reactive, computed, ref, watch } from "vue";

export default {
  name: "App",
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const user = reactive({
      firstName: "ef",
      lastName: "ef",
      userName: "ravi",
      age: 21,
    });
    // const userRef = toRefs(user);
    // setTimeout(() => {
    //   user.userName = "Ravson";
    //   user.age = 22;
    // }, 5000);
    function setAge() {
      user.age += 1;
    }
    const userName = computed(() => {
      return firstName.value + " " + lastName.value;
    });

    watch([lastName, firstName], (newValues, oldValues) => {
      console.log("old Age " + oldValues[0]);
      console.log("new Age" + newValues[1]);
    });

    // const userName = computed(() => {
    //   return user.firstName + " " + user.lastName;
    // });

    // function setFirstName(event) {
    //   user.firstName = event.target.value;
    // }
    // function setLastName(event) {
    //   user.lastName = event.target.value;
    // }

    return {
      firstName,
      lastName,
      user: user,
      setAge: setAge,
      // setFirstName,
      // setLastName,
      userName,
    };
  },
  // data() {
  //   return {
  //     user: "ravi",
  //   };
  // },
};
</script>

<style scoped>
section {
  width: 60%;
  margin: 20px auto;
  border: 1px solid grey;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0.5px 0px 10px 0.2rem rgba(99, 99, 99, 0.359);
}
h2,
h3 {
  text-transform: uppercase;
  margin: 10px 0;
  padding: 0;
}
</style>
