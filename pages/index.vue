<script setup>
const uri = `/api/posts`

const {data, execute} = await useFetch(uri, {key: uri})

</script>

<template>
  <div>
    {{ JSON.stringify(data) }}
  </div>
</template>