<template>
  <!-- Wrapper  -->
  <section class="d-flex align-items-center flex-column mt-5">
    <h5>Add User Form</h5>
    <form class="w-50 card p-4 my-3 rounded" @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-6">
          <label for="firstname">Firstname</label>
          <Field
            name="firstname"
            type="text"
            class="form-control"
            id="firstname"
          />
          <div v-if="errors.firstname" class="text-danger">
            {{ errors.firstname }}
          </div>
        </div>
        <div class="col-6">
          <label for="lastname">Lastname</label>
          <Field
            name="lastname"
            type="text"
            class="form-control"
            id="lastname"
          />
          <div v-if="errors.lastname" class="text-danger">
            {{ errors.lastname }}
          </div>
        </div>
      </div>

      <div class="mt-3">
        <label for="email">Email</label>
        <Field name="email" type="text" class="form-control" id="email" />
        <div v-if="errors.email" class="text-danger">
          {{ errors.email }}
        </div>
      </div>
      <div class="mt-3">
        <label for="phone">Phone Number</label>
        <Field name="phone" type="tel" class="form-control" id="phone" />
        <div v-if="errors.phone" class="text-danger">
          {{ errors.phone }}
        </div>
      </div>
      <!-- action buttons  -->
      <div class="mb-2 mt-4 row g-0 gx-2">
        <div class="col-6">
          <button type="submit" class="w-100 btn btn-primary">Submit</button>
        </div>
        <div class="col-6">
          <button class="w-100 btn btn-secondary">Cancel</button>
        </div>
      </div>
    </form>
    <!-- out side form button  -->
    <button class="btn btn-warning" @click="checkValidation">
      Check Validation
    </button>
  </section>
</template>

<script setup lang="ts">
import * as yup from "yup";
import { defineEmits } from "vue";
import { useForm, configure, Field } from "vee-validate";
import user from "@/components/users/userModel";
import { useRouter } from "vue-router";

const $emit = defineEmits(["submit"]);
const $router = useRouter();
configure({
  validateOnBlur: true,
  validateOnInput: true,
  validateOnChange: true,
});

const schema = yup.object({
  firstname: yup.string().required().trim(),
  lastname: yup.string().required().trim(),
  email: yup.string().required().trim().email(),
  phone: yup.string().required().trim(),
});

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
};
const { validate, handleSubmit, errors } = useForm({
  initialValues: initialValues,
  validationSchema: schema,
});

const onSubmit = handleSubmit((values: user) => {
  // Handle form submission
  validate().then((isValid) => {
    if (isValid) {
      console.log("yes valid");
      // $emit[0] = values;
      $emit("submit", values);
      $router.push("user-list");
    }
  });
  console.log();
});

function checkValidation() {
  validate();
}
</script>
