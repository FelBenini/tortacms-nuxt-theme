<script setup>
const uri = `/api/posts`

const {data, execute} = await useFetch(uri, {key: uri})
</script>

<template>
  <section v-for="post in data.posts">
    <PostCard :title="post.title" :backgroundImage="post.backgroundImage" :summary="post.summary" :uri="'/' + post.postUrl" />
  </section>
</template>

<style scoped>

section {
  width: 860px;
  max-width: 100%;
  margin: 0 auto;
}

</style>