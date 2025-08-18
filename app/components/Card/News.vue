<script setup lang="ts">
defineProps(['is_news_item'])
</script>

<template>
  <div class="">
    <div class="mb-6 pb-4" :class="is_news_item ? 'border-b border-black' : ''" >
      <img class="w-full " src="https://placehold.co/600x400" alt="">
    </div>
    <div class="grid grid-cols-12">
      <div class="col-start-1 col-end-9">
        <p>Philipp Plein Sport</p>
        <p class="opacity-40" v-if="!is_news_item">/Производство торгового оборудования</p>
      </div>
      <div class="col-start-10 col-end-13 justify-self-end self-end">
        <p class="opacity-40 text-[12px] mb-2" v-if="is_news_item">15 мая 2025</p>
        <UILinkWithArrow v-if="is_news_item" label="Читать" to="/"/>
        <nuxt-link class="border-b border-black" v-else to="/">Подробнее</nuxt-link>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>