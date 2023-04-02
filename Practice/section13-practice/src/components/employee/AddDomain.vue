<template>
    <form @submit.prevent="addDomain">
        <div>
            <label for="name" class="ps-2 my-1">Domain Name</label>
            <input type="text" id="name" placeholder="Enter Domain" class="form-control" v-model="enteredDomain">
        </div>
        <div class="my-2 text-danger" v-if="!isDomainName"><span>This field is required</span></div>
        <div class="my-3"><button class="btn btn-primary">Submit</button></div>
    </form>
</template>
<script>
export default {
    data() {
        return {
            enteredDomain: '',
            isDomainName: true
        }
    },
    methods: {
        // addDomain() {
        //     if (this.enteredDomain) {
        //         fetch('https://vue-practice-2b7ca-default-rtdb.firebaseio.com/domains.json')
        //     } else {
        //         this.isDomainName = false
        //     }

        // }
    }
}

</script>