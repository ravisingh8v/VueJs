<template>
  <li class="border rounded-1 p-3 my-3 d-flex flex-column position-relative">
    <span>
      <span class="text-primary">{{ username }}</span
      >- {{ message }}
    </span>
    <span>
      <span>rating: </span>
      <span
        :class="{
          'text-success': rating === 'good',
          'text-warning': rating === 'average',
          'text-danger': rating === 'poor',
        }"
      >
        {{ rating }}
      </span>
    </span>
    <span
      class="delete-icon bi bi-x-circle-fill"
      @click="$emit('deleteUser', id), (loading = true)"
    ></span>
    <span
      class="edit-icon bi bi-pencil-square"
      @click="$emit('editUser', id)"
    ></span>
    <div class="list-overlay" v-if="loading"></div>
  </li>
</template>
<script>
export default {
  props: ["id", "username", "message", "rating", "error"],
  data() {
    return {
      loading: false,
    };
  },
  mounted() {},
};
</script>
<style>
.list-overlay {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  width: 100%;
}
.delete-icon {
  position: absolute;
  top: -10px;
  right: -5px;
  color: rgba(250, 40, 40, 0.43);
  transition: all 0.35s linear;
}
.edit-icon {
  position: absolute;
  top: -10px;
  right: 20px;
  color: rgba(57, 202, 255, 0.585);
  transition: all 0.35s linear;
}
.delete-icon:hover {
  color: rgb(246, 63, 63);
  transform: scale(1.2);
}
.edit-icon:hover {
  color: rgb(57, 202, 255);
  transform: scale(1.2);
}
</style>
