<script setup lang="ts">
defineProps(['title','link_label','link_to','is_h1','w_border'])
</script>

<template>
<div class="flex items-end justify-between mb-[40px] md:mb-[32px] " :class="w_border ? 'border-b border-[#E6E6E6] pb-10' : ''">
  <h1  v-if="is_h1" class="text-[24px] md:text-[36px] manrope-font font-semibold leading-[100%]" v-html="title"></h1>
  <h2 v-else class="text-[24px] md:text-[36px] manrope-font font-semibold leading-[100%]" v-html="title"></h2>
  <UILinkWithArrow v-if="link_label" :label="link_label" :to="link_to"/>
</div>
</template>

<style scoped>

</style>