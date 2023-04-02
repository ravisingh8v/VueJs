<template>
  <h3>{{ teamName }}</h3>
  <ul>
    <li v-for="user in teamMember" :key="user">
    {{ user.name }}
    </li>
    <!-- <li></li>
    <li></li>
    <li></li> -->
  </ul>
</template>

<script>


export default {
  data() {
    return {
      teamName: '',
      teamMember: ''
    }
  },
  inject: ['teams', 'users'],
  methods:{
    getUserDetails(route){
      const teamId = route.params.id;
      console.log(teamId);
    const team = this.teams.find((res) => res.id == teamId)
    const members = team.member;
    const selecteduser = []
    for (const member in members) {
      const user = this.users.find(res => res.id === members[member])
      selecteduser.push(user)
      console.log(selecteduser);
    }
    this.teamName=team.name;
    this.teamMember=selecteduser
    }
  },
  created() {
    this.getUserDetails(this.route)

  },
  watch:{
    $route(route){
      console.log(route);
      this.getUserDetails(route)
    }
  }
};
</script>
