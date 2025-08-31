<script setup lang="ts">
defineProps(['label', 'to'])
</script>

<template>
  <nuxt-link class="flex w-auto items-center gap-2 text-[12px] md:text-[16px] font-semibold uppercase leading-[100%] md:leading-[75%]" :to="to">{{label}} <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.16753 11.0748L10.9395 1.30283M10.9395 1.30283L4.7266 1.26168M10.9395 1.30283L10.9807 7.51577" stroke="#2C2C2C" stroke-width="1.7" stroke-linecap="round"/>
  </svg>
  </nuxt-link>
</template>
