<template>
  <section class="d-flex align-items-center flex-column mt-5">
    <h5>Add User Form</h5>
    <Form
      @submit="submitForm"
      class="w-50 border p-4 my-3 rounded"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <div>
        <label for="name">Name</label>
        <Field
          name="name"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.name }"
          id="name"
        />
        <span class="my-2 invalid-feedback">{{ errors.name }}</span>
      </div>
      <div>
        <label for="email">Email</label>
        <Field
          name="email"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.email }"
          id="email"
        />
        <span class="my-2 invalid-feedback">{{ errors.email }}</span>
      </div>
      <div>
        <label for="phone">Phone Number</label>
        <Field
          name="phone"
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': errors.phone }"
          id="phone"
        />
        <span class="my-2 invalid-feedback">{{ errors.phone }}</span>
      </div>
      <div class="mb-2 mt-4 row g-0 gx-2">
        <div class="col-6">
          <button type="submit" class="w-100 btn btn-primary">Submit</button>
        </div>
        <div class="col-6">
          <button class="w-100 btn btn-secondary">Cancel</button>
        </div>
      </div>
    </Form>
    <!-- <div
      v-if="showModel"
      class="d-flex justify-content-center align-items-center position-fixed top-0 bottom-0 w-100 bg-black bg-opacity-75"
    >
      <div class="model card p-3">
        <div class="px-2">
          <div class="mb-4 mt-2">Are you sure?</div>
          <div>
            <button class="btn btn-danger me-2" @click="modelResponse(true)">
              Okay
            </button>
            <button
              class="btn btn-secondary ms-2"
              @click="modelResponse(false)"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>
<script lang="ts">
import { Form, Field } from "vee-validate";
import * as yup from "yup";
export default {
  components: {
    Form,
    Field,
  },
  methods: {
    submitForm(value: unknown) {
      console.log(value);
    },
    // modelResponse(value: boolean) {
    //   this.showModel = false;
    //   if (value) {
    //     this.discard = true;
    //   } else {
    //     this.discard = false;
    //   }
    // },
  },

  //   beforeRouteLeave(to, from, next) {
  //     console.log(to, from);
  //     this.showModel = true;
  //     next(this.discard);
  //   },

  data() {
    const schema = yup.object({
      name: yup.string().required("this required"),
      phone: yup
        .string()
        .typeError("That doesn't look like a phone number")
        .required()
        .min(1, "why")
        .max(10),
      email: yup.string().email().required(),
    });
    return { schema };
    // discard: false, showModel: false
  },
};
</script>
<style lang="scss" scoped>
// .v-enter-to {
//   opacity: 1;
//   transform: translateX(0);
// }
// .v-leave-to {
//   opacity: 0;
//   transform: translateX(400px);
// }
// .v-enter-from {
//   opacity: 0;
//   transform: translateX(-400px);
// }
// .v-leave-from {
//   opacity: 1;
//   transform: translateX(0);
// }
// .v-enter-active,
// .v-leave-active {
//   transition: all 0.3s linear;
// }
</style>
