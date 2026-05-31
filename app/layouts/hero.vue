<script setup lang="ts">
const route = useRoute()
const { $api } = useNuxtApp()
const seo = ref<any>(null)
const show_seo = ref(false)

async function loadSeo() {
  try {
    seo.value = await $api.blank.seo(route.name)
  } catch {
    seo.value = null
  }
}

await loadSeo()

watch(() => route.name, async () => {
  await loadSeo()
})

watch(
  seo,
  (value) => {
    useHead({
      title: value?.title || 'Торговое оборудование и мебель для бизнеса — Москва',
      meta: [
        { name: 'description', content: value?.description },
        { name: 'keywords', content: value?.keywords },
        { property: 'og:title', content: value?.og_title },
        { property: 'og:description', content: value?.og_description },
        { property: 'og:image', content: value?.og_image },
      ],
    })
  },
  { immediate: true }
)
</script>

<template>
  <slot/>
  <div v-if="seo?.content" class="container">
    <Button class="mt-10" label="Подробнее" @click="show_seo = !show_seo"/>
    <div v-show="show_seo" class="container">
      <div class="html-content mt-10" v-html="seo.content"/>
    </div>
  </div>
  <BlockFooter/>
</template>
