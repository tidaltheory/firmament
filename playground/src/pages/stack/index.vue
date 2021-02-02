<template>
    <div className="container my-24">
        <stack space-class="space-y-8">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900">
                Stack
            </h2>
            <div className="prose">
                <p>
                    The most common white space on screen is between elements
                    stacked vertically. Can also be used to automatically insert
                    dividing lines between children.
                </p>
            </div>
            <div class="w-auto">
                <stack space-class="space-y-8" :dividers="true">
                    <div class="h-16 bg-gray-200" />
                    <div class="h-16 bg-gray-200" />
                    <div class="h-16 bg-gray-200" />
                </stack>
            </div>
        </stack>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Stack } from 'firmament'
export default defineComponent({
    components: { Stack },
})
</script>
