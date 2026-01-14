<script setup lang="ts">
defineProps(['item','index','total'])
</script>

<template>
  <div class="flex flex-col items-start">
    <p class="text-[28px] leading-[100%] tracking-[-1px] mb-7">{{item.name}}</p>
    <p class="opacity-40 mb-4">Задача проекта</p>
    <p class="mb-7">{{item.task}}</p>
    <NuxtLink class="inline-flex items-center gap-2 border-b border-black mb-7" :to="`/cases/${item.slug}`">
      Подробнее
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.1819 10.9496L11.0814 1.05014M11.0814 1.05014L4.77326 0.994321M11.0814 1.05014L11.1372 7.35828" stroke="#2C2C2C" stroke-linecap="round"/>
      </svg>

    </NuxtLink>
      <img class="w-full h-full" :src="item.cover" alt="">


  </div>
</template>

<style scoped>

</style>