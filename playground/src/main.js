import 'tailwindcss/tailwind.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import routes from 'pages-generated'

import App from './App.vue'

console.log(routes)
const router = createRouter({
    history: createWebHistory(
        process.env.NODE_ENV === 'production' ? '/firmament/' : '/',
    ),
    routes,
})

createApp(App).use(router).mount('#app')
