<template>
    <div>
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
    height: 200dvh;
}
</style>