<script setup>
const route = useRoute()

const { date, slug } = route.params

const uri = `https://tortacms-back.vercel.app/api/post/${date.replaceAll('-', '/')}/${slug}`

const {data} = await useFetch(uri, {key: uri})

console.log(data)

if (!data.value) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found' })
  }

</script>

<template>
    <div>
        <h1>{{ data.title }}</h1>
        <div>{{ data.content }}</div>
    </div>
</template>