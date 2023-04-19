<template>
  <!-- @input="setLastName" -->
  <!-- @input="setFirstName" -->
  <section>
    <userData
      :firstName="firstName"
      :lastName="lastName"
      @check="check"
    ></userData>
    <p>{{ firstName.firstName || "not found" }}</p>
    <input type="text" name="firstname" v-model="firstName" id="" />
    <input type="text" name="firstname" id="" ref="lastNameInput" />
    <button @click="setLastName">Set Last Name</button>
    <button @click="setAge">Change Age</button>
  </section>
  <!-- <section>
    <RouterView></RouterView>
  </section> -->
</template>

<script>
import { reactive, computed, ref, watch, provide } from "vue";
import userData from "./components/userData.vue";
export default {
  name: "App",
  components: { userData },

  // df

  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const lastNameInput = ref(null);
    const age = ref(21);
    const user = reactive({
      firstName: "ef",
      lastName: "ef",
      // userName: "ravi",
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
    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }
    const userName = computed(() => {
      return firstName.value + " " + lastName.value;
    });

    watch([lastName, firstName], (newValues, oldValues) => {
      console.log("old Age " + oldValues[0]);
      console.log("new Age" + newValues[1]);
    });

    function check(value) {
      console.log(value);
    }
    // check();

    provide("userAge", age);

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
      setLastName,
      lastNameInput,
      userName,
      check,
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
