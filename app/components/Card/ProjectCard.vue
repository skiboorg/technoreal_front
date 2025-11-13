<script setup lang="ts">
defineProps(['item'])
</script>

<template>
  <div class="grid grid-cols-12  items-end border-t border-black py-10 gap-[30px] md:gap-6">
    <div class="col-span-12 md:col-span-6 flex flex-col items-start justify-between h-full ">
      <h3 class="text-[22px] md:text-[32px] mb-[30px] md:mb-0">{{item.name}}</h3>
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
  <div class="hidden md:grid grid-cols-4 gap-5 mb-10 md:mb-[100px]">
    <img class="w-full h-auto object-cover"
         v-for="img in item.gallery_images1 ? item.gallery_images1 : item.gallery_images" :src="img.image"
         alt=""
    >
  </div>

    <img v-if="item.gallery_images1" class="block md:hidden w-full h-auto object-cover mb-10"
       :src="item.gallery_images1[0]?.image"
         alt=""
    >
  <img v-else class="block md:hidden w-full h-auto object-cover mb-10"
       :src="item.gallery_images[0]?.image"
       alt=""
  >

</template>

<style scoped>

</style>