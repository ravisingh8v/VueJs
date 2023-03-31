<template>
  <base-list>
    <li
      v-for="team in teams"
      :key="team.id"
      class="border card p-2 my-2 bg-light text-dark"
    >
      <span>{{ team.name.toUpperCase() }}</span>
      <span><span>members-</span>{{ team.member.length }}</span>
      <div class="my-2">
        <button class="btn btn-dark" @click="viewMember(team.id)">
          View Members
        </button>
      </div>
    </li>
  </base-list>
</template>
<script>
export default {
  inject: ["teams"],
  methods: {
    viewMember(id) {
      this.$router.push("/the-router/users-list/" + id);
    },
  },
};
</script>
