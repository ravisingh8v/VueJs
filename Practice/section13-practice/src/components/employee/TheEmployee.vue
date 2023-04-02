<template>
    <nav class="p-2 d-flex justify-content-center">
        <ul class="navbar-nav d-flex flex-row">
            <li class="nav-item mx-2">
                <RouterLink class="nav-link btn btn-primary text-white p-2" :to="{name:'add-employee'}">Add Employee</RouterLink>
            </li>
            <li class="nav-item mx-2">
                <RouterLink class="nav-link btn btn-primary text-white p-2" :to="{name:'employee-list'}">Employee List</RouterLink>
            </li>
            <li class="nav-item mx-2">
                <RouterLink class="nav-link btn btn-primary text-white p-2" :to="{name:'domains'}">Domains</RouterLink>
            </li>
        </ul>
    </nav>
    <section>
            <RouterView></RouterView>
        </section>
</template>
<script>
export default {


}
</script>
<style scoped> 
.nav-link.router-link-exact-active{
    background-color: #212529;
    border: #212529;
}
</style>