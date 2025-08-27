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
  <div class="container  mb-[80px] md:mb-[180px]">
    <PageBlockServices class="border-b border-black"/>
  </div>

  <PageBlockWhyWe class="mb-[80px] md:mb-[100px]"/>
  <div class="container">
    <PageBlockProjects :show_title="true" class="mb-[80px] md:mb-[140px]"/>
  </div>
  <div class="container">
    <PageBlockForm id="#form" class="mb-[80px] md:mb-[100px]"/>
  </div>

  <PageBlockProjectGallery class="mb-[80px] md:mb-[140px]  "/>
  <PageBlockNews class=" "/>
  <PageBlockFaq class=""/>
</template>