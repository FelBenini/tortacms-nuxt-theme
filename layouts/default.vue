<template>
    <Header />
    <main>
        <slot />
    </main>
</template>

<script>
import '@/assets/globals.css'
</script>

<style>
    main {
        padding-top: 84px;
        height: 200dvh;
    }
</style>