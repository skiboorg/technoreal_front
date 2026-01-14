<script setup>
const route = useRoute()
const config = useRuntimeConfig()

useHead({
  link: [
    {
      rel: 'canonical',
      href: config.public.apiUrl + route.fullPath
    }
  ]
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>