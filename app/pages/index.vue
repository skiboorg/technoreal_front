<script setup lang="ts">
// definePageMeta({
//   guest: true,
//   layout: 'auth'
// })

useSeoMeta({
  title: 'Торговое оборудование и мебель для бизнеса — Москва',
  description: 'Производство торговой мебели и оборудования: островные конструкции, витрины, корнеры, стеллажи, кассовые узлы, ресепшены, мебель для HoReCa и рекламные конструкции.'
})

</script>
<template>
  <PageBlockOffer class="mb-[140px] md:mb-[140px]"/>
  <PageBlockServices class="mb-[80px] md:mb-[180px]"/>
  <PageBlockWhyWe class="mb-[80px] md:mb-[100px]"/>
  <PageBlockProjects :show_title="true" class="mb-[80px] md:mb-[140px]"/>
  <PageBlockForm id="#form" class="mb-[80px] md:mb-[100px]"/>
  <PageBlockProjectGallery class="mb-[80px] md:mb-[140px]  "/>
  <PageBlockNews class="mb-[80px] md:mb-[140px] pb-[80px] md:pb-[140px] border-b border-black"/>
  <PageBlockFaq class=" pb-[80px] md:pb-[140px] border-b border-black"/>
</template>