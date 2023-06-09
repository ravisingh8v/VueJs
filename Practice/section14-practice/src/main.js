import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'


const app = createApp(App)
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'', redirect:'/app'},
        {path:'/app', component:App}
    ]
})

app.use(router)
app.mount('#app')
