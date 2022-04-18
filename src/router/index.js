import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Features from '../views/Features.vue'
import Process from '../views/Process.vue'
import Discover from '../views/Discover.vue'
import Feedback from '../views/Feedback.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/features', name: 'Features', component: Features},
    {path: '/process', name: 'Process', component: Process},
    {path: '/discover', name: 'Discover', component: Discover},
    {path: '/feedback', name: 'Feedback', component: Feedback},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
