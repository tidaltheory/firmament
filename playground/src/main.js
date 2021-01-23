import 'tailwindcss/tailwind.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import routes from 'vite-plugin-pages/client'

import App from './App.vue'

console.log(routes)
const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
