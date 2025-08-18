<script setup lang="ts">
defineProps(['item','index','total'])
</script>

<template>
<div class="grid grid-cols-1 md:grid-cols-2 gap-7 border-t border-black pt-7">
  <div class="">
    <img class="w-full h-[360px]" :src="item.cover" alt="">
  </div>
  <div class="flex flex-col items-start justify-between">
    <div class="grid grid-cols-12 mb-[45px]">
      <div class="col-span-10">
        <p class="text-[28px] leading-[100%] tracking-[-1px]">{{item.name}}</p>
      </div>
      <div class="col-span-2 justify-self-end">
        <p><span>{{index+1}}</span> <span class="opacity-40">/ {{total}}</span></p>
      </div>
    </div>
    <p class="opacity-40 mb-4">Описание</p>

    <p class="mb-7">{{item.short_description}}</p>
    <NuxtLink class="inline-flex items-center gap-2 border-b border-black" :to="`/services/${item.slug}`">
      Подробнее
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.1819 10.9496L11.0814 1.05014M11.0814 1.05014L4.77326 0.994321M11.0814 1.05014L11.1372 7.35828" stroke="#2C2C2C" stroke-linecap="round"/>
      </svg>

    </NuxtLink>
  </div>
</div>
</template>

<style scoped>

</style>