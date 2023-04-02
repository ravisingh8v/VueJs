<template>
    <section class="d-flex justify-content-center">
        <div v-if="loader" class="position-absolute top-50 start-50 translate-middle ">
            <span>Loading....</span>
        </div>
        <div class="w-50 border border-secondary mt-3 rounded overflow-hidden" v-else>
            <h2 class="text-center text-white p-0 mb-3 bg-dark p-2">{{ domain }}</h2>
            <ul class="p-2">
                <li v-for="member in members " :key="member.id" class="my-2 p-2 bg-secondary text-white rounded">
                    <div class="d-flex flex-column">
                        <span>{{ member.name }}</span>
                        <span>{{ member.role }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>

export default {
    data() {
        return {
            employeeList: [],
            loader: false,
            domain: '',
            members: []
        }
    },
    methods: {
        /**
         * getting Employee list
         */
        getAllEmployee() {
            this.loader = true
            fetch('https://vue-practice-2b7ca-default-rtdb.firebaseio.com/employee.json', {
                method: 'GET'
            }).then((res) => {
                if (res.ok) {
                    return res.json()
                }
            }).then((res) => {
                const employeeList = [];
                for (const id in res) {
                    employeeList.push({
                        id: id,
                        name: res[id].name,
                        domain: res[id].domain,
                        role: res[id].role
                    })
                }
                this.employeeList = employeeList;
            });
        }
    },

    // for calling get employee function 
    mounted() {
        this.getAllEmployee()
    },

    // to getting current params data and members
    watch: {
        employeeList() {
            this.loader=false
            const id = this.$route.params.Id
            const currentDomain = this.employeeList.filter(res => res.domain === id)
            this.domain = id;
            this.members = currentDomain
        }
    }
}
</script>