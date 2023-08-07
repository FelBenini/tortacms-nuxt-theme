<script setup lang="ts">
  const {data: response}: any = useFetch('https://tortacms-back.vercel.app/api/posts')
</script>

<template>
    <div v-for="post in response.posts">
      {{ post.title }}
    </div>
  </template>