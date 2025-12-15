<script setup lang="ts">
defineProps(['title','link_label','link_to','is_h1'])
</script>

<template>
<div class="flex items-end justify-between mb-[40px] md:mb-[70px]">
  <h1  v-if="is_h1" class="text-[36px] md:text-[80px] manrope-font leading-[100%]" v-html="title"></h1>
  <h2 v-else class="text-[36px] md:text-[80px] manrope-font leading-[100%]" v-html="title"></h2>
  <UILinkWithArrow v-if="link_label" :label="link_label" :to="link_to"/>
</div>
</template>

<style scoped>

</style>