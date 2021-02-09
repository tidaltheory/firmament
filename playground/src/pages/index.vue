<template>
    <div className="container my-24">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900">
            Components
        </h2>
        <div className="prose">
            <router-link to="/stack/"
                ><h3 class="text-xl">Stack</h3></router-link
            >

            <router-link to="/inline/"
                ><h3 class="text-xl">Inline</h3></router-link
            >

            <router-link to="/columns/"
                ><h3 class="text-xl">Columns</h3></router-link
            >

            <router-link to="/text/"><h3 class="text-xl">Text</h3></router-link>
        </div>
    </div>
</template>

<script>
export default {}
</script>
