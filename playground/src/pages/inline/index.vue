<template>
    <div className="container my-24">
        <stack space-class="space-y-8">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900">
                Inline
            </h2>
            <div className="prose">
                <p>
                    Renders a set of components in a row with equal spacing
                    around them, wrapping onto multiple lines when necessary.
                </p>
            </div>
            <div class="w-auto">
                <inline space-class="gap-4">
                    <div class="w-8 h-16 bg-gray-200" />
                    <div class="w-20 h-16 bg-gray-200" />
                    <div class="w-14 h-16 bg-gray-200" />
                    <div class="w-36 h-16 bg-gray-200" />
                    <div class="w-32 h-16 bg-gray-200" />
                    <div class="w-14 h-16 bg-gray-200" />
                    <div class="w-10 h-16 bg-gray-200" />
                    <div class="w-44 h-16 bg-gray-200" />
                    <div class="w-24 h-16 bg-gray-200" />
                    <div class="w-14 h-16 bg-gray-200" />
                    <div class="w-28 h-16 bg-gray-200" />
                    <div class="w-10 h-16 bg-gray-200" />
                </inline>
            </div>
        </stack>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Inline, Stack } from 'firmament'
export default defineComponent({
    components: { Inline, Stack },
})
</script>
