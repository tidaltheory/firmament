<template>
    <div className="container my-24">
        <Stack space-class="space-y-8">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900">
                Components
            </h2>
            <div className="prose">
                <h3 class="text-xl">
                    <router-link to="/stack">Stack</router-link>
                </h3>

                <h3 class="text-xl">
                    <router-link to="/inline">Inline</router-link>
                </h3>

                <h3 class="text-xl">
                    <router-link to="/columns">Columns</router-link>
                </h3>

                <h3 class="text-xl">
                    <router-link to="/text">Text</router-link>
                </h3>
            </div>
        </Stack>
    </div>
</template>

<script>
export default {}
</script>
