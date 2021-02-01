<template>
    <div
        class="flex items-start justify-center w-screen h-full p-12 bg-gray-50"
    >
        <div class="w-auto">
            <stack space-class="space-y-8" :dividers="true">
                <div class="w-16 h-16 bg-gray-200" />
                <div class="w-16 h-16 bg-gray-200" />
                <div class="w-16 h-16 bg-gray-200" />
            </stack>
        </div>
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
