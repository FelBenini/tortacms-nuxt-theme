<script setup>
const props = defineProps(['title', 'summary', 'backgroundImage', 'uri'])

let displaySummary
let displayBgImg

if (!props.backgroundImage) {
    displayBgImg = '/noImagePost.jpeg'
} else {
    displayBgImg = props.backgroundImage
}

if (props.summary && props.summary.length >= 150 ) {
    displaySummary = props.summary.slice(0, 230) + '...'
} else {
    displaySummary = props.summary
}

</script>

<template>
    <NuxtLink :to="uri">
        <div class="card">
            <span :style="`background-image: url(${displayBgImg}); background-position: center; background-size: cover`"></span>
            <div>
                <h1>{{ title }}</h1>
                <p v-if="summary">{{ displaySummary }}</p>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>

a {
    text-decoration: none;
}

.card {
    margin: 0 auto;
    width: 100%;
    display: flex;
    height: fit-content;
    align-items: center;
    gap: 0.9rem;
    cursor: pointer;
    padding: 12px;
    border-radius: 8px;
    transition: ease 0.1s;
}

.card:hover {
    background-color: #242424c7;
}

.card div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 165px;
}

span {
    height: 165px;
    aspect-ratio: 16/9;
    border-radius: 4px;
}

p {
    margin-top: 0.6rem;
}

</style>