<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const isDev = import.meta.dev;

</script>

<template>
  <NuxtLayout>
    <div class="container">
      <div class="flex w-full flex-col items-center justify-center h-screen">

        <div v-if="error?.statusCode == 404">
          <h1 class="text-3xl mb-10">Страница не найдена</h1>
          <div class="text-center w-full">
            <NuxtLink to="/"><Button label="На главную"/></NuxtLink>
          </div>

        </div>
        <div v-else>
          Временная ошибка системы, не скучайте, ремонтируем
        </div>
      </div>
    </div>

    <pre v-if="isDev">
    {{ JSON.stringify(error, null, 2) }}
  </pre>
  </NuxtLayout>

</template>