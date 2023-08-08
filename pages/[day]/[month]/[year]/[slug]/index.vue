<script setup>
const route = useRoute()

const { day, month, year, slug } = route.params

const uri = `/api/post/${day}/${month}/${year}/${slug}`

const {data, execute} = await useFetch(uri, {key: uri})

console.log(data)

if (!data.value) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

</script>

<template>
    <section>
        <h1>{{ data.title }}</h1>
        <h4 v-if="data.summary">{{ data.summary }}</h4>
        <img :src="data.backgroundImage" loading="lazy" v-if="data.backgroundImage" />
        <span>
            <p>Posted by:</p>
            <h3>{{ data.postedBy }}</h3>
        </span>
        <hr />
        <MarkdownStringRenderer :markdownString="data.content" />
    </section>
</template>

<style scoped>

section {
    max-width: 98%;
    margin: 0 auto;
    width: 730px;
}

h1 {
    font-size: 3.5rem;
    border-left: 6px solid #00dc82;
    height: fit-content;
    padding: 0px;
    line-height: 3.5rem;
    margin-bottom: 1.9rem;
    padding-left: 0.6rem;
    word-spacing: -0.403px;
}

h4 {
    font-style: italic;
    font-weight: 400;
    width: 98%;
    margin: 0 auto;
}

img {
    max-width: 100%;
    margin: 1.2rem 0px;
    border-radius: 4px;
}

hr {
    border-radius: 50%;
    margin-top: 1.5rem;
    color: #daecda9b;
}

span {
    display: flex;
    align-items: center;
}

span p {
    margin-right: 6px;
}

</style>