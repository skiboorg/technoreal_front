<script setup lang="ts">
defineProps(['show_title'])
const {$api} = useNuxtApp()

const {data} = await useAsyncData(()=>$api.blank.projects())

useSeoMeta({
  title: 'Портфолио Технореал – торговая мебель и реализованные проекты',
  description: 'Портфолио реализованных проектов Технореал: торговые витрины, стеллажи, островные конструкции, мебель HoReCa и ресепшены.'
})
</script>

<template>
  <section>

    <div class="container">
      <BlockSectionTitle title="Наши проекты"/>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-7 border-b border-black pb-[80px] mb-[80px] md:pb-[120px] md:mb-[140px]">
        <CardCase v-for="(item,index) in data" :item="item" :index="index" :total="data.length"/>


      </div>
      <PageBlockCbForm/>
    </div>
  </section>

</template>

<style scoped>

</style>