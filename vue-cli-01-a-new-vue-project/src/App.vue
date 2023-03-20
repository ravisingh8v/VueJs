<template>
  <span>hello</span>
  <friend-contact></friend-contact>
</template>

<script>
export default {
  data() {
    return {
      freinds: [
        { name: "ravi", email: "ravi@gmail.com", phone: "123 456 7890" },
        { name: "nikunj", email: "nikunj@gmail.com", phone: "098 7654 321" },
      ],
    };
  },
};
</script>
