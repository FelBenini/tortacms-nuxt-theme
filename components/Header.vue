<template>
    <header :class="className">
        <nuxt-link to="/">
            <img src="/logo.svg" />
        </nuxt-link>
        <span>
            <nuxt-link to="/about">
                About
            </nuxt-link>
        </span>
    </header>
</template>

<style>
header {
    position: fixed;
    width: calc(98% - 24px);
    margin: 6px 1%;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 12px;
    border-radius: 8px;
    transition: all ease 0.2s;
}

header a {
    text-decoration: none;
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