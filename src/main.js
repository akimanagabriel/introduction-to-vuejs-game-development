import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// required functions
import { createRouter, createWebHistory } from "vue-router"

import Home from './pages/Home.vue'
import Info from './pages/Info.vue'
import Login from './pages/Login.vue'

const routes = [
    {
        path: "/home",
        component: Home
    }, {
        path: "/info",
        component: Info
    }, {
        path: "/",
        component: Login
    }
]

const app = createApp(App)
app.use(createRouter({
    routes,
    history: createWebHistory()
}))
app.mount('#app')
