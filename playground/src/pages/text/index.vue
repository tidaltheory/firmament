<template>
    <div className="container my-24">
        <stack space-class="space-y-8">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900">
                Text
            </h2>
            <div className="prose">
                <Text as="p" class="font-sans text-base leading-7">
                    Provides a limited subset of typography-related properties.
                    Also handles other text utilities; like trimming leading
                    whitespace, truncating, and text selection.
                </Text>
            </div>
            <div class="w-auto">
                <Stack space-class="space-y-8" dividers>
                    <Text
                        >Corporate-grade Tokyo console geodesic gaijin silver
                        ICE graphic socket polycarbon razorgirl Yakuza
                        television.</Text
                    >
                </Stack>
            </div>
        </stack>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Stack, Text } from 'firmament'
export default defineComponent({
    components: { Stack, Text },
})
</script>
