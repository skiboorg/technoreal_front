<script setup lang="ts">
defineProps(['title','link_label','link_to'])
</script>

<template>
<div class="flex items-end justify-between mb-[40px] md:mb-[70px]">
  <h3 class="text-[36px] md:text-[80px] manrope-font leading-[100%]" v-html="title"></h3>
  <UILinkWithArrow v-if="link_label" :label="link_label" :to="link_to"/>
</div>
</template>

<style scoped>

</style>