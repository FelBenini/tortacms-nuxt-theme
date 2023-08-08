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
    <div>
        <h1>{{ data.title }}</h1>
        <MarkdownStringRenderer :markdownString="data.content" />
    </div>
</template>