<script setup>
import markdownParser from "@nuxt/content/transformers/markdown"

const props = defineProps({
  markdownString: {
    type: String,
    required: true,
  }
});

const record = ref("");

watchEffect(async () => {
  await markdownParser.parse("custom.md", props.markdownString).then((md) => record.value = md);
});
</script>

<template>
  <ContentRendererMarkdown class="markdown" :value="record" v-if="record" />
</template>

<style>

.markdown * {
    margin: 1.2rem 0px;
}

.markdown {
    font-size: 112%;
    text-rendering: optimizeLegibility;
    overflow-wrap: break-word;
    word-wrap: normal;
    letter-spacing: -0.6px;
    line-height: 140%;
}

.markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6 {
    margin-top: 2.8rem;
}

</style>