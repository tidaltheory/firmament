<template>
    <div className="container my-24">
        <Stack space-class="space-y-8">
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
                <Stack space-class="space-y-8" :dividers="true">
                    <Placeholder class="h-16" />
                    <Placeholder class="h-16" />
                    <Placeholder class="h-16" />
                </Stack>
            </div>
        </Stack>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Stack } from 'firmament'
import Placeholder from '../../components/placeholder.vue'
export default defineComponent({
    components: { Stack, Placeholder },
})
</script>
