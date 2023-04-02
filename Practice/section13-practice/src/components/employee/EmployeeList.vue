<template>
    <section class="d-flex justify-content-center">
        <div v-if="!employeeList.length && !loader" class="position-absolute top-50 start-50 translate-middle ">
            <span>No Record Found</span>
        </div>
        <ul class="w-50 my-3" v-else>
            <li class="border border-secondary rounded bg-secondary text-white p-2 my-2 d-flex justify-content-between" v-for="employee in employeeList" :key="employee.id">
                <div class="d-flex flex-column">
                    <div class="fw-bold">
                        <span>Name:- </span> <span>{{ employee.name }}</span>
                    </div>
                    <div>
                        <span>Role:- </span> <span>{{ employee.role }}</span>
                    </div>
                    <div class="mt-2 text-warning">
                        <span>Domain:- </span> <span>{{ employee.domain }}</span>
                    </div>
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <span>edit</span>
                    <span>delete</span>
                </div>
            </li>
        </ul>
        <div v-if="loader" class="position-absolute top-50 start-50 translate-middle ">
            <span>Loading....</span>
        </div>
        <div v-if="error" class="position-absolute top-50 start-50 translate-middle ">
            <span>No Data Found</span>
        </div>
    </section>
</template>
<script>

export default {
    data() {
        return {
            employeeList: [],
            loader: false,
            error: false
        }
    },
    methods: {
        getAllEmployeeData() {
            this.loader = true
            fetch('https://vue-practice-2b7ca-default-rtdb.firebaseio.com/employee.json', {
                method: 'GET'
            }).then((res) => {
                this.loader = false
                // console.log(res);
                if (res.ok) {
                    this.error = false;
                    return res.json()
                } else if (res.status === 404) {
                   throw new Error('No Data Found')
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
                this.employeeList = employeeList.reverse()
            }).catch((error) => {
                if (error) {
                    this.error = true;
                }
            })
    }
    },
    mounted() {
        this.getAllEmployeeData()
    }
}
</script>