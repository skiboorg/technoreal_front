<script setup lang="ts">
defineProps(['item'])
</script>

<template>
  <div class="grid grid-cols-12  items-end border-t border-black py-10 gap-[30px] md:gap-6">
    <div class="col-span-12 md:col-span-6 flex flex-col items-start justify-between h-full ">
      <p class="text-[22px] md:text-[32px] mb-[30px] md:mb-0">{{item.name}}</p>
      <div class="flex flex-wrap gap-1 md:gap-5"><p class="opacity-40 w-full md:w-auto">Услуги</p><p>/Производство торгового оборудования</p></div>
    </div>
    <div class="col-span-12 md:col-span-4">
      <p class="opacity-40 mb-4">Задача проекта</p>
      <p>{{item.task}}</p>
    </div>
    <div class="col-span-12 md:col-span-2 md:justify-self-end">
      <nuxt-link class="border-b border-black" :to="`/cases/${item.slug}`">Подробнее</nuxt-link>
    </div>
  </div>
  <div class="grid grid-cols-4 gap-5 mb-10 md:mb-[100px]">
    <img class="w-full h-auto object-cover" v-for="img in item.gallery_images1" :src="img.image" alt="">
  </div>
</template>

<style scoped>

</style>