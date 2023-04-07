<template>
  <section class="d-flex flex-column align-items-center">
    <h4>This is the users list</h4>
    <div class="p-2">
      <input type="text" placeholder="enter user" v-model="name" />
      <button class="mx-2" @click="addUser">Add</button>
    </div>
    <div class="d-flex border w-25 p-4 d-flex justify-content-center">
      <transition-group tag="ul" name="list">
        <li
          class="p-2 text-center border"
          v-for="user of usersList"
          :key="user"
          @click="removeItem(user)"
        >
          {{ user }}
        </li>
      </transition-group>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
});
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(-200px);
}

.list-enter-to,
.list-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.list-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.list-leave-active {
  transition: transform opacity 0.3s linear;
  position: absolute;
}
.list-enter-active {
  transition: transform opacity 0.3s linear;
}
.list-move {
  transition: all 0.5s linear;
  // position: absolute;
}
</style>
