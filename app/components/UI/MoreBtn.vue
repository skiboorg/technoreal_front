<script setup lang="ts">
defineProps(['to'])
</script>

<template>
<NuxtLink :to="to" class="inline-flex p-3 gap-2 items-center bg-black rounded-md text-white">
  Подробнее
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.05006 10.9496L10.9496 1.05014M10.9496 1.05014L4.64142 0.994321M10.9496 1.05014L11.0054 7.35828" stroke="white" stroke-linecap="round"/>
  </svg>

</NuxtLink>
</template>

<style scoped>

</style>