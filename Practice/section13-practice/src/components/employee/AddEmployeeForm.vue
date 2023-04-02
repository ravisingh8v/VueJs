<template>
    <section class="d-flex justify-content-center">
        <form class="w-50 rounded p-2 py-4 mt-4" @submit.prevent="postEmployeeData">
            <div class="name my-2">
                <label for="name">Name: <span class="text-danger">*</span></label>
                <input type="text" id="name" placeholder="Enter Your Name" class="form-control" v-model="enteredName">
            </div>
            <div class="domain my-2">
                <label for="domain">Domain <span class="text-danger">*</span></label>
                <select name="domain" id="domain" class="form-select" v-model="selectedDomain">
                    <option value="" :selected="true" disabled>select domain</option>
                    <option value="FrontEnd">FrontEnd</option>
                    <option value="BackEnd">BackEnd</option>
                    <option value="DevOps">DevOps</option>
                </select>
            </div>
            <div class="role my-2">
                <label for="role">Role <span class="text-danger">*</span></label>
                <select name="role" id="role" class="form-select" v-model="selectedRole">
                    <option value="" selected disabled>select role</option>
                    <option value="Associate-Trainee">Associate Trainee</option>
                    <option value="Associate-L1">Associate L1</option>
                    <option value="Associate-L2">Associate L2</option>
                </select>
            </div>
            <div class="my-3 text-danger" v-if='formNotValid'>all the fields are mandatory*</div>
            <div class="my-3 text-danger" v-if='error'>something went wrong please try again later</div>
            <div class="action-button text-end">
                <button type="reset" class="btn btn-primary me-2">Reset</button>
                <button type="submit" class="btn btn-primary ms-2"><span v-if="loader">Sending....</span><span
                        v-else>Submit</span></button>
            </div>
        </form>
    </section>
</template>

<script>

export default {
    data() {
        return {
            id: 0,
            enteredName: '',
            selectedDomain: '',
            selectedRole: '',
            formNotValid: false,
            error: false,
            loader: false
        }
    },

    methods: {
        postEmployeeData() {
            this.loader = true
            if (this.enteredName && this.selectedDomain && this.selectedRole) {
                this.formNotValid = false;
                fetch('https://vue-practice-2b7ca-default-rtdb.firebaseio.com/employee.json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.enteredName,
                        domain: this.selectedDomain,
                        role: this.selectedRole
                    })
                }).then((res) => {
                    if (res.ok) {
                        this.loader = false,
                            this.enteredName = ''
                        this.selectedDomain = '',
                            this.selectedRole = '',
                            this.error = false
                        this.$router.push('employee-list')
                    }
                }).catch((error) => {
                    if (error) {
                        this.loader = false
                        this.error = true;
                    }
                })
            } else {
                this.formNotValid = true;
            }
        }
    }
}
</script>