<template>
    <div>
        <NuxtLoadingIndicator />
        <Header />
        <main>
            <slot />
        </main>
    </div>
</template>

<script>
import '@/assets/globals.css'
</script>

<style>
main {
    padding-top: 84px;
}
</style>