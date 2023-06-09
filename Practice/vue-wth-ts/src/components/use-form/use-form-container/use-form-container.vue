<template>
  <use-form-presentation @submit="submit"></use-form-presentation>
</template>
<script setup lang="ts">
import useFormPresentation from "../use-form-presentation/use-form-presentation.vue";
import user from "../../users/userModel";
import { useStore } from "vuex";
const $store = useStore();
function submit(values: user) {
  console.log(values);
  $store.dispatch("getUserList", values);
}
</script>
