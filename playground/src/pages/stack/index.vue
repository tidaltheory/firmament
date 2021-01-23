<template>
    <div
        class="flex items-start justify-center w-screen h-full p-12 bg-gray-50"
    >
        <stack>
            <div class="w-16 h-16 bg-gray-200" />
            <div class="w-16 h-16 bg-gray-200" />
            <div class="w-16 h-16 bg-gray-200" />
        </stack>
    </div>
</template>

<script>
import { ref } from 'vue'
import { Stack } from 'firmament'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default {
    components: { Stack },
    setup(props, context) {
        let state = ref(false)
        return {
            state,
            resolveSwitchClass({ checked }) {
                return classNames(
                    'relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline',
                    checked ? 'bg-indigo-600' : 'bg-gray-200',
                )
            },
        }
    },
}
</script>
