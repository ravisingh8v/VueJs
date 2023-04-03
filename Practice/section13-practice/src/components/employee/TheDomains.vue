<template>
  <section class="d-flex justify-content-center">
    <div
      v-if="loader"
      class="position-absolute top-50 start-50 translate-middle"
    >
      <span>Loading....</span>
    </div>
    <ul class="w-50" v-else>
      <!-- 
            ------    for adding new domain  ------
            -->
      <!-- <li class="text-end my-2">
                <RouterLink :to="{name:'add-domain'}" class="btn btn-success" @click="addDomainClicked=!addDomainClicked">Add Domain</RouterLink>
            </li> -->
      <!-- <li class="my-2 border rounded p-2" v-if="addDomainClicked">
                <RouterView></RouterView>
            </li> -->
      <li
        class="p-2 border border-secondary rounded my-2 d-flex justify-content-between align-items-center"
        v-for="domain in domains"
        :key="domain.id"
      >
        <div class="d-flex flex-column">
          <span class="fw-bold">{{ domain.name }}</span>
          <span>Members :- {{ domain.members.length }}</span>
        </div>
        <div>
          <a class="btn btn-secondary" @click="viewMember(domain.name)"
            >View Members</a
          >
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      loader: false,
      addDomainClicked: false,
      employeeList: [],
      domains: [
        { id: "d1", name: "FrontEnd", members: [] },
        { id: "d2", name: "BackEnd", members: [] },
        { id: "d3", name: "DevOps", members: [] },
      ],
    };
  },
  methods: {
    viewMember(Id) {
      this.$router.push({ name: "member", params: { Id: Id } });
    },
    getAllEmployee() {
      this.loader = true;
      fetch(
        "https://vue-practice-2b7ca-default-rtdb.firebaseio.com/employee.json",
        {
          method: "GET",
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((res) => {
          const employeeList = [];
          for (const id in res) {
            employeeList.push({
              // const {name,domain,role}=res[id] ,
              id: id,
              name: res[id].name,
              domain: res[id].domain,
              role: res[id].role,
            });
          }
          this.employeeList = employeeList;
        });
    },
  },
  mounted() {
    this.getAllEmployee();
  },
  watch: {
    employeeList() {
      for (let domain in this.domains) {
        // console.log(this.domains[domain].name);
        let memberList = this.employeeList.filter(
          (res) => res.domain === this.domains[domain].name
        );
        memberList.forEach((res) => {
          this.domains[domain].members.push(res.name);
        });
        // this.domains[domain].members=b;
      }
      this.loader = false;
      // console.log(this.domains);
    },
  },
  // inject:['employeeList']
};
</script>
