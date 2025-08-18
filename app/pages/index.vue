<script setup lang="ts">
// definePageMeta({
//   guest: true,
//   layout: 'auth'
// })



</script>
<template>
  <PageBlockOffer class="mb-[140px] md:mb-[190px]"/>
  <PageBlockServices class="mb-[80px] md:mb-[180px]"/>
  <PageBlockWhyWe class="mb-[80px] md:mb-[100px]"/>
  <PageBlockProjects :show_title="true" class="mb-[80px] md:mb-[140px]"/>
  <PageBlockForm class="mb-[80px] md:mb-[100px]"/>
  <PageBlockProjectGallery class="mb-[80px] md:mb-[140px] pb-[80px] md:pb-[140px] border-b border-black"/>
  <PageBlockNews class="mb-[80px] md:mb-[140px] pb-[80px] md:pb-[140px] border-b border-black"/>
  <PageBlockFaq class=" pb-[80px] md:pb-[140px] border-b border-black"/>
</template>