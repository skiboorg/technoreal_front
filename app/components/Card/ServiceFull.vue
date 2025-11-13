<script setup lang="ts">
defineProps(['item','index','show_btn'])
const config = useRuntimeConfig();

</script>

<template>
<div v-if="item" class="border-t border-black py-7 grid grid-cols-12 gap-[30px] md:gap-0">
  <div class="col-span-12 md:col-span-1">0{{index+1}}</div>
  <h3 class="col-span-12 md:col-span-5 text-[22px] md:text-[36px] leading-[100%]" >{{item.name}}</h3>
  <div class="col-span-12 md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-7">
    <div class="order-1 md:order-0">
      <img class="" :src="config.public.apiUrl+item.cover" alt="">
    </div>
    <div class="order-0 md:order-1 flex flex-col items-start justify-between gap-[30px] md:gap-0">
      <p class="text-gray-500">{{item.short_description}}</p>
      <UIMoreBtn v-if="show_btn" :to="`/services/${item.slug}`"/>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>