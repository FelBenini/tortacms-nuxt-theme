<script setup>
const uri = `https://tortacms-back.vercel.app/api/posts`

const {data} = await useFetch(uri, {key: uri})
</script>

<template>
  <div>
    {{ JSON.stringify(data) }}
  </div>
</template>