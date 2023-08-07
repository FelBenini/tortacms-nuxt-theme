<script setup lang="ts">

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

const handleSubmit = (e: Event) => {
    e.preventDefault();
}

const searchValue = ref('')

</script>

<template>
    <header :class="className">
        <nuxt-link to="/">
            <img src="/logo.svg" />
        </nuxt-link>
        <span>
            <form v-on:submit="handleSubmit">
                <input placeholder="Search..."
                    type="text" 
                    :value="searchValue"
                    @input="e => searchValue = (e.target as HTMLButtonElement).value"
                />
                <button type="submit">
                    <img src="/search-icon.svg" />
                </button>
            </form>
            <nuxt-link to="/about">About</nuxt-link>
        </span>
    </header>
</template>

<style>

form {
    display: flex;
    height: 38px;
    border-radius: 4px;
}

form button {
    border-radius: 0px 6px 6px 0px;
    width: 38px;
    background-color: #414141;
    border: 2px solid #414141;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

form button:hover {
    background-color: #515151;
    border: 2px solid #515151;
}

form input {
    border: 2px solid #505050;
    background-color: transparent;
    border-radius: 6px 0px 0px 6px;
    padding-left: 6px;
}

form input:focus {
    outline: #00dc82 2px solid;
}

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

header span {
    display: flex;
    align-items: center;
    width: 340px;
    justify-content: space-between;
}

header a {
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: all ease 0.15s;
}

header a:hover {
    text-decoration-color: #e0e0e0;
}

.scrolled {
    background: #242424;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
</style>