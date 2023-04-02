// Importing External Files 
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// component import 
import App from './App.vue'
import TheHome from './components/TheHome.vue'
import TheEmployee from './components/employee/TheEmployee.vue'
import TheAbout from './components/TheAbout.vue'
import AddEmployeeForm from './components/employee/AddEmployeeForm.vue'
import EmployeeList from './components/employee/EmployeeList.vue'
import TheDomains from './components/employee/TheDomains.vue'
import TheMember from './components/employee/TheMember.vue'

// Creating App 
const app = createApp(App)

// creating Router 
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', redirect: '/home' },
        { path: '/home', component: TheHome },
        {
            path: '/employee', component: TheEmployee, children: [
                { path: '', redirect: '/employee/employee-list' },
                { name: 'employee-list', path: 'employee-list', component: EmployeeList },
                { name: 'add-employee', path: 'add-employee', component: AddEmployeeForm },
                {
                    name: 'domains', path: '/employee/domains', component: TheDomains, children: [
                    ]
                },
                { name: 'member', path: 'member/:Id', component: TheMember }
            ]
        },
        { path: '/about', component: TheAbout },
    ],
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        else {
            return { top: 0, left: 0 }
        }

    }

})
app.use(router)
app.mount('#app')

// without storing in variable
// createApp(App).use(router).mount('#app')
