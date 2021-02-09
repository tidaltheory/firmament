<template>
    <div
        class="flex items-center justify-center bg-gray-100 ring-1 ring-gray-300 ring-inset"
    >
        <Text class="font-mono text-xs font-medium text-gray-500">
            <slot />
        </Text>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Text } from 'firmament'
export default defineComponent({
    components: { Text },
})
</script>
