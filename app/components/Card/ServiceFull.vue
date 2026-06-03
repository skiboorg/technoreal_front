<script setup lang="ts">
defineProps(['item','index','show_btn'])
const config = useRuntimeConfig();

</script>

<template>

    <div
        v-if="item"
        class=" w-[380px] h-[380px] md:w-full md:h-[325px] bg-cover bg-center p-5 flex flex-col justify-end items-start "
        :style="`background-image: linear-gradient(180deg, rgba(24,11,1,0) 0%,
  rgba(24,11,1,0.8) 100%), url(${config.public.apiUrl + item.cover})`"
    >
<p class="text-white font-semibold text-[22px] mb-5">{{item.name}}</p>
    <nuxt-link  :to="`/services/${item.slug}`" class="inline-flex items-center text-sm text-white gap-2 border-b border-white ">
      Подробнее
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.501235 10.4554L10.4007 0.555882M10.4566 6.86402L10.4007 0.555882L4.09259 0.500058" stroke="white" stroke-linecap="round"/>
      </svg>
    </nuxt-link>
    </div>

</template>

<style scoped>

</style>