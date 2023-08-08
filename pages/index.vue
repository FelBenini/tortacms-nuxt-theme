<script setup>
const {data} = await useFetch(`https://tortacms-back.vercel.app/api/posts`)
</script>

<template>
  <div>
    {{ JSON.stringify(data) }}
  </div>
</template>