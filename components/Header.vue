<template>
    <header :class="className">
        <img src="/logo.svg" />
    </header>
</template>

<style>
header {
    position: fixed;
    width: calc(98% - 24px);
    margin: 6px 1%;
    height: 46px;
    display: flex;
    align-items: center;
    padding: 12px;
    border-radius: 6px;
    transition: all ease 0.2s;
}

.scrolled {
    background: #242424;
}
</style>

<script setup>

let className = ref('default');

onMounted(() => {
    function animateHeader() {
        let scrollableHeight = (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (scrollableHeight > 0) {
            className.value = 'scrolled'
        } else {
            className.value = 'default'
        }
    }

    document.addEventListener('scroll', animateHeader);
    document.addEventListener('load', animateHeader);
})
</script>