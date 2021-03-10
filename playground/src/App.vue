<template>
    <div
        class="flex flex-col h-screen overflow-hidden font-sans antialiased text-gray-900 bg-grey-800"
    >
        <header
            class="relative z-10 flex items-center justify-between flex-shrink-0 px-4 py-4 bg-grey-800 border-b border-gray-200 sm:px-6 lg:px-8"
        >
            <div class="container">
                <router-link
                    class="font-medium text-white hover:text-grey-100"
                    to="/"
                >
                    Firmament
                </router-link>
            </div>
        </header>
        <main class="flex-1 overflow-auto bg-gray-50">
            <router-view />
            <KeyCaster />
        </main>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import KeyCaster from './KeyCaster.vue'
export default defineComponent({
    name: 'App',
    components: {
        KeyCaster,
    },
})
</script>
