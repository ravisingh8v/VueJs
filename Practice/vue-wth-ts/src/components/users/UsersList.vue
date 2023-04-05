<template>
  <section class="d-flex flex-column align-items-center">
    <h4>This is the users list</h4>
    <div class="p-2">
      <input type="text" placeholder="enter user" v-model="name" />
      <button class="mx-2" @click="addUser">Add</button>
    </div>
    <div class="d-flex border w-25 p-4 d-flex justify-content-center">
      <TransitionGroup tag="ul" name="list">
        <li
          class="p-2 text-center border"
          v-for="user of usersList"
          :key="user"
          @click="removeItem(user)"
        >
          {{ user }}
        </li>
      </TransitionGroup>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  data() {
    return {
      name: "",
      usersList: ["ravi", "nikunj", "amresh"],
    };
  },
  methods: {
    removeItem(user: string) {
      this.usersList = this.usersList.filter((res) => res !== user);
    },
    addUser() {
      this.usersList.unshift(this.name);
    },
  },
};
</script>
<style lang="scss">
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.list-enter-from {
  opacity: 0;
}
.list-leave-from {
  opacity: 1;
}
.list-enter-to {
  opacity: 1;
}
.list-leave-to {
  opacity: 0;
}
.list-enter-active,
.list-enter-leave {
  transition: all 0.2s linear;
}
// .link-move {
//   transition: transform 0.2s linear;
// }
</style>
